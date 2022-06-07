import { expect, it } from 'vitest'
import { getTheme } from '../generateTheme'
import { colorNames, styleNames } from '../../styles/theme'

const getReqThemeBase = () => {
  const base = [...colorNames, ...styleNames].map(e => `--${e}`)

  return {
    light: base.filter(e => !e.includes('dark')),
    dark: base.filter(e => e.includes('dark')).map(e => e.replace('dark-', '')),
  }
}

describe('generateTheme', () => {
  it('getTheme should match with base theme', async () => {
    const result = await getTheme()
    const requireThemeNames = getReqThemeBase()
    for (const key in result) {
      const element = result[key as keyof typeof result]
      if (!key.includes('dark')) {
        const difference = requireThemeNames.light.filter(name => !Object.keys(element).includes(name))
        expect(difference).toHaveLength(0)
      }
      if (key.includes('dark')) {
        const difference = requireThemeNames.dark.filter(name => !Object.keys(element).includes(name))
        expect(difference).toHaveLength(0)
      }
    }
  })
})
