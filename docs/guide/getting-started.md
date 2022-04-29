# Getting Started

Install via NPM

::: info
Make sure that you have [Vue3](https://vuejs.org) and [WindiCSS](https://windicss.org) installed.
:::

Install

```js
npm install vue-windi
```

Include vuewindi module folder to `WindiCSS` plugin inside the `vite.config.ts`

```js
export default defineConfig({
  plugins: [
    WindiCSS({
      scan: {
        include: ["../node_modules/vue-windi/dist/*"],
      }
    }),
  ],
});
```

Require wConfig as a presets inside the `windi.config.ts`
```js
import { defineConfig } from 'windicss/helpers'
import {wConfig} from '../node_modules/vue-windi/src/assets/'

export default defineConfig({
  presets: [wConfig], 
})
```

Import vuewindi CSS to `main.js` bellow the windiCSS import

```js{2}
import 'virtual:windi.css'
import '../node_modules/vue-windi/src/assets/vuewindi.css'
```


