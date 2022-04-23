import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "VueWindi",
      fileName: (format) => `vue-windi.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    }

  },

  plugins: [
    vue(),  
    WindiCSS({ 
      scan: {
      dirs: ['.'], // all files in the cwd
      fileExtensions: ['vue', 'js', 'ts'], // also enabled scanning for js/ts
      },
      config: path.resolve(__dirname, 'windi.config.ts')
    }),
  ]

})
