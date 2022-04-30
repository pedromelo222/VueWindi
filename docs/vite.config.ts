import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'



export default defineConfig({
  
  plugins: [
    
    WindiCSS({   
    scan: {
      include: ['../src/components/**'],
      dirs: ['.'], // all files in the cwd
      fileExtensions: ['vue', 'js', 'ts', 'md' ], // also enabled scanning for js/ts
      },
  },   
  )],
})
