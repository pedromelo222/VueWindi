import DefaultTheme from 'vitepress/theme'

import 'virtual:windi.css'
import '../../../src/assets/vuewindi.css'


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
  }
}