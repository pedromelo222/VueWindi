import type{ App } from 'vue'
import * as components from './components'
function install(app: App) {
  for (const key in components)
    app.component(key, components[key as keyof typeof components])
}

export default { install }

export * from './components'

