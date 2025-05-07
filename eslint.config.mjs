import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import pkg from './node_modules/.pnpm/%40rocketseat%2Beslint-config%402.2.2_%40types%2Beslint%409.6.1_eslint%409.22.0_typescript%405.7.3/node_modules/%40rocketseat/eslint-config/node.js'
const { eslintConfigRocket } = pkg

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  eslintConfigRocket,
  {
    ignores: ['node_modules', 'dist'],
    rules: {
      'no-useless-constructor': 'off',
      'no-new': 'off',
    },
  },
]
