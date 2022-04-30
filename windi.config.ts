import { defineConfig } from 'windicss/helpers'
import wConfig from './src/assets/wConfig'

export default defineConfig({
  darkMode: 'class', // or 'media' ,
  attributify: true,
  
  presets: [wConfig],

 
})