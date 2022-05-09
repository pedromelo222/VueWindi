import colors from "windicss/colors";
import plugin from 'windicss/plugin'
import base from '../styles/base'
import theme from '../styles/theme'
import utilities from '../styles/utilities'

export default {
  preflight: {
    safelist: "button a ul li",
  },
  theme: {
    colors: {
      ...theme
    },    
    extend: {
      colors: {
        teal: colors.teal,
        blue: colors.blue,
        rose: colors.rose,
        violet: colors.violet,
        orange: colors.orange,
        white: colors.white,
        black: colors.black,
        gray: colors.gray,
        dark: colors.dark,
        light: colors.light,
        red: colors.red,
        yellow: colors.yellow,
        green: colors.green,
      },    
    },
  },
  
  plugins: [
    plugin(({ addUtilities, addComponents }) => {
      addComponents([base])
      addUtilities(utilities)
    }),
  ]
};
