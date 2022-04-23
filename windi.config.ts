import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'class', // or 'media' ,
  attributify: true,
  theme: {
    colors: {
      primary: {
        50: 'var(--color-primary-50)',
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)',
        600: 'var(--color-primary-600)',
        700: 'var(--color-primary-700)',
        800: 'var(--color-primary-800)',
        900: 'var(--color-primary-900)',
      },
      vuewindi: {
        bg: 'var(--vuewindi-bg)',
        bc: 'var(--vuewindi-bc)',
        text: 'var(--vuewindi-text)'
      },
    },     
    extend: {
      colors: {
        teal: colors.teal,
        blue: colors.sky,
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
        green: colors.green

      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
      },  
    },
  },
 
})