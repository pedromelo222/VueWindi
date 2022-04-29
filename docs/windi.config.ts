import { defineConfig } from 'windicss/helpers'
import {wConfig} from '../src/assets/'

export default defineConfig({
  darkMode: 'class',
  presets: [wConfig],
  preflight: {
    safelist: "button",
  },
  
 

})