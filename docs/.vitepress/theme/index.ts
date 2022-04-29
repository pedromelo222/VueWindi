import DefaultTheme from 'vitepress/theme'

import 'virtual:windi.css'


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
  }
}