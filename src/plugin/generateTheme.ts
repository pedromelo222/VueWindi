import { brighten, hexToRgb, mostReadable } from '../styles/functions'
import { baseTheme, colorNames, themes } from '../styles/theme'
import { getConfig, isObjKey } from './functions'

type Themes = string[] | string

interface VueWindiConfig {
  themes: Themes
}

interface Theme { [key: string]: string }

interface GeneratedTheme { [key: string]: { [key: string]: string } }

const defaultTheme = 'blue'

/**
   * check if given key include in theme default color names
   *
   * @param key
   */
const keyIncludeDefault = (key: string) => {
  for (const name of colorNames) {
    if (key.includes(name))
      return true
  }
  return false
}

/**
 *  Override theme vars for defined theme or base theme if they exist
 * @param themes
 * @param setTheme
 */
const overrideTheme = (themes: Themes, setTheme: Theme) => {
  for (const definedItem of themes) {
    if (typeof definedItem === 'object') {
      for (const definedKey in definedItem as any) {
        // if this key exists in defined theme or baseTheme then replace value
        if (isObjKey(definedKey as string, setTheme) || baseTheme.includes(definedKey))
          setTheme[definedKey] = definedItem[definedKey]
      }
    }
  }
  return setTheme
}

// generate missing colors from theme
const generateMissingColors = (setTheme: Theme) => {
  const difference = colorNames.filter(name => !Object.keys(setTheme).includes(name))
  for (const key in difference) {
    const difName = difference[key]
    if (difName.includes('focus')) {
      const index = Object.keys(setTheme).find(name => name.includes(difName.replace('-focus', '')))
      const color = setTheme[index as keyof typeof setTheme]
      setTheme[difName] = brighten(color, -10)
    }
    if (difName.includes('content')) {
      const index = Object.keys(setTheme).find(name => name.includes(difName.replace('-content', '')))
      const color = setTheme[index as keyof typeof setTheme]
      setTheme[difName] = mostReadable(color)
    }
    if (difName.includes('base-200' || 'dark-base-200')) {
      const index = Object.keys(setTheme).find(name => name.includes(difName.replace('-200', '')))
      const color = setTheme[index as keyof typeof setTheme]
      setTheme[difName] = brighten(color, -5)
    }
    if (difName.includes('base-300' || 'dark-base-300')) {
      const index = Object.keys(setTheme).find(name => name.includes(difName.replace('-300', '')))
      const color = setTheme[index as keyof typeof setTheme]
      setTheme[difName] = brighten(color, -10)
    }
  }
  return setTheme
}

// generate theme with rgb colors and separate light from dark
const generateTheme = (theme: Theme) => {
  const generatedTheme: GeneratedTheme = { light: {}, dark: {} }
  const themeColor = Object.assign({}, theme)
  for (const key in themeColor) {
    if (keyIncludeDefault(key))
      themeColor[key] = hexToRgb(theme[key])
    // separate light colors  from dark
    if (key.includes('dark'))
      generatedTheme.dark[`--${key.replace('dark-', '')}`] = themeColor[key]
    else
      generatedTheme.light[`--${key}`] = themeColor[key]
  }

  return generatedTheme
}

/**
 * @returns formated theme using default theme with out whitout user configuration
 *
 */
async function getTheme() {
  const vueWindiConfig: VueWindiConfig = await getConfig()

  let setTheme: Theme = {}
  let generatedTheme: GeneratedTheme = { light: {}, dark: {} }
  const otherThemes = []
  // include other themes
  const generatedOthers: { [key: string]: { [key: string]: string } } = {}

  //  if no vuewindi config defined in `windi.config` then defaultTheme is set
  if (vueWindiConfig === undefined || vueWindiConfig.themes === undefined)
    setTheme = themes[defaultTheme]

  // if vuewindi config is set in `windi.config`
  if (Object.keys(setTheme).length === 0) {
    let definedTheme: string | null = null
    // get first theme defined
    for (const theme of vueWindiConfig.themes) {
      if (typeof theme == 'string') {
        if (!definedTheme)
          definedTheme = theme
        else
          otherThemes.push(theme)
      }
    }
    // check if defined theme is keyof `themes`
    if (!isObjKey(definedTheme as string, themes))
      definedTheme = defaultTheme

    setTheme = themes[definedTheme as keyof typeof themes]
  }

  // replace theme vars for defined theme vars if they exist
  if (vueWindiConfig !== undefined && vueWindiConfig.themes !== undefined)
    setTheme = overrideTheme(vueWindiConfig.themes, setTheme)

  setTheme = generateMissingColors(setTheme)
  generatedTheme = generateTheme(setTheme)

  for (const theme of otherThemes) {
    const tempTheme: { [key: string]: { [key: string]: string } } = {}
    // check if other theme is present in VueWindi themes
    if (isObjKey(theme, themes)) {
      tempTheme[theme] = generateMissingColors(themes[theme])

      let tempGenerated: GeneratedTheme = {}

      tempGenerated = generateTheme(tempTheme[theme])
      generatedOthers[`.theme-${theme}`] = tempGenerated.light
      generatedOthers[`.dark.theme-${theme}`] = tempGenerated.dark
    }
  }

  return {
    ':root': generatedTheme.light,
    '.dark': generatedTheme.dark,
    ...generatedOthers,
  }
}

export { getTheme }

