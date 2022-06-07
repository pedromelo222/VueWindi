import fs from 'fs'
import path from 'path'

const defaultConfigNames = [
  'windi.config.js',
  'windi.config.ts',
  'windicss.config.js',
  'windicss.config.ts',
]

const getConfigPath = () => {
  let configPath = null
  let configFilePath: string | undefined

  for (const name of defaultConfigNames) {
    configPath = path.resolve(process.cwd(), name)
    if (fs.existsSync(configPath)) {
      configFilePath = configPath
      break
    }
  }
  if (!configFilePath)
    throw new Error('windi.config file not found')

  return configFilePath
}

/**
 * Get vueWindi user configuration in `windi.config`
 *
 * @returns The vueWindi user configuration
 */
async function getConfig() {
  const themePath = getConfigPath()
  const config = await import(themePath)

  return config.default.vueWindi
}

/**
 * Check if given string is keyof given object
 *
 * @param key
 * @param obj
 */
function isObjKey<T>(key: PropertyKey, obj: T): key is keyof T {
  return key in obj
}

export { isObjKey, getConfig }

