import { defineConfig } from 'windicss/helpers'
import vueWindi from './src/plugin'

export default defineConfig({
  darkMode: 'class',
  plugins: [vueWindi],
  vueWindi: {
    themes: [
      'vuewindi',
      'teal',
      'dracula',
      'nord',
      'neutral',
    ],
  },
})
