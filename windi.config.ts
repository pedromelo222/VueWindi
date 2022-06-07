import { defineConfig } from 'windicss/helpers'
import vueWindi from './src/plugin'

export default defineConfig({
  darkMode: 'class',
  plugins: [vueWindi],
  vueWindi: {
    themes: [
      'blue',
      'teal',
      'dracula',
      'nord',
      'neutral',
    ],
  },
})
