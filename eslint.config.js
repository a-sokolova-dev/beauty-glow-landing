import customTsConfig from 'eslint-config/ts'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { ignores: ['dist/'] },
  ...customTsConfig,
]
