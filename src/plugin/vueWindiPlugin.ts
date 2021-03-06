import plugin from 'windicss/plugin'
import base from '../styles/base'
import configColors from '../styles/config'
import utilities from '../styles/utilities'
import { getTheme } from './generateTheme'

const vueWindi = plugin(
  async ({ addUtilities, addBase }) => {
    addBase(base)
    addBase(await getTheme())
    addUtilities(utilities)
  },
  {
    preflight: {
      safelist: 'button a ul li input',
    },
    theme: {
      extend: {
        colors: () => ({
          ...configColors,
        }),
      },
    },
  },
)

export default vueWindi
