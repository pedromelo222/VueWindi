 import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VueWindi',
  description: 'Vue + Windicss',
  themeConfig: {
    docsDir: 'docs',

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/config/': getGuideSidebar(),
      '/': getGuideSidebar()
    }
  }, 
})

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'VueWindi', link: '/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
      ]
    },
    {
      text: 'Components',
      children: [
        { text: 'Button', link: '/components/button/' },
        { text: 'Input', link: '/components/input/' },
    
      ]
    }
  ]
}