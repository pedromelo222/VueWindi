import fs from 'fs'
import path from 'path'
import { hexToRgb } from '../styles/functions'
import themes from '../styles/theme'

const DEFAULT_THEME = 'blue'

const defaultConfigNames = [
  'windi.config.js',
  'windi.config.ts',
  'windicss.config.js',
  'windicss.config.ts',
]

// function to check if given string is keyof given object
function isObjKey<T>(key: PropertyKey, obj: T): key is keyof T {
  return key in obj
}

// check if include default key for get rgba from hex
function keyIncludeDefault(key: string) {
  return (
    key.includes('primary')
    || key.includes('secondary')
    || key.includes('success')
    || key.includes('danger')
    || key.includes('warning')
    || key.includes('base')
  )
}

const getConfigPath = () => {
  let configPath = null
  let configFilePath: string | undefined

  for (const name of defaultConfigNames) {
    configPath = path.resolve(process.cwd(), name)
    if (fs.existsSync(configPath)) {
      configFilePath = configPath
      break
    }
  }
  if (!configFilePath)
    throw new Error('windi.config file not found')

  return configFilePath
}

const resolveConfig = (configPath: string) => {
  return require(configPath)
}

const getTheme = () => {
  const themePath = getConfigPath()
  const getTheme = resolveConfig(themePath).default.vueWindi

  let setTheme: { [key: string]: string } = {}
  const generatedLight: { [key: string]: string } = {}
  const generatedDark: { [key: string]: string } = {}

  const otherThemes = []

  // if no vuewindi config defined set default theme `DEFAULT_THEME`
  if (getTheme === undefined || getTheme.themes === undefined) {
    setTheme = themes[DEFAULT_THEME]
  }
  else {
    let definedTheme
    // get first theme defined
    for (const theme of getTheme.themes) {
      if (typeof theme == 'string') {
        if (!definedTheme)
          definedTheme = theme
        else
          otherThemes.push(theme)
      }
    }
    // check if defined theme is keyof `themes`
    if (!isObjKey(definedTheme as string, themes))
      definedTheme = DEFAULT_THEME

    setTheme = themes[definedTheme as keyof typeof themes]
  }

  // replace theme vars for defined theme vars if they exist
  if (getTheme !== undefined && getTheme.themes !== undefined) {
    for (const definedItem of getTheme.themes) {
      // console.log( definedItem)
      if (typeof definedItem == 'object') {
        // console.log( definedItem)
        for (const definedKey in definedItem) {
          if (Object.prototype.hasOwnProperty.call(definedItem, definedKey)) {
            // if this key exists in defined theme then change value
            if (isObjKey(definedKey as string, setTheme))
              setTheme[definedKey] = definedItem[definedKey]
          }
        }
      }
    }
  }

  // generate theme with rgb colors and separate light from dark
  for (const key in setTheme) {
    if (Object.prototype.hasOwnProperty.call(setTheme, key)) {
      if (keyIncludeDefault(key))
        setTheme[key] = hexToRgb(setTheme[key])

      // separate light colors  from dark
      if (key.includes('dark'))
        generatedDark[`--${key.replace('dark-', '')}`] = setTheme[key]
      else
        generatedLight[`--${key}`] = setTheme[key]
    }
  }

  // include other themes
  const generatedOthers: { [key: string]: { [key: string]: string } } = {}

  for (let i = 0; i < otherThemes.length; i++) {
    const temporaryTheme: { [key: string]: { [key: string]: string } } = {}
    const theme = otherThemes[i]
    // check if other theme is present in VueWindi themes
    if (isObjKey(theme, themes)) {
      temporaryTheme[theme] = themes[theme]
      generatedOthers[`.theme-${theme}`] = {}
      generatedOthers[`.dark.theme-${theme}`] = {}

      for (const key in temporaryTheme[theme]) {
        if (Object.prototype.hasOwnProperty.call(temporaryTheme[theme], key)) {
          if (keyIncludeDefault(key)) {
            // separate light colors  from dark
            if (key.includes('dark')) {
              generatedOthers[`.dark.theme-${theme}`][
                `--${key.replace('dark-', '')}`
              ] = hexToRgb(temporaryTheme[theme][key])
            }
            else {
              generatedOthers[`.theme-${theme}`][`--${key}`] = hexToRgb(
                temporaryTheme[theme][key],
              )
            }
          }
          else {
            generatedOthers[`.theme-${theme}`][`--${key}`]
              = temporaryTheme[theme][key]
          }
        }
      }
    }
  }

  return {
    ':root': generatedLight,
    '.dark': generatedDark,
    ...generatedOthers,
  }
}

export { getTheme }
