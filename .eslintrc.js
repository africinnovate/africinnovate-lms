/* eslint-disable prettier/prettier */

module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier',],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['dist/', 'node_modules/',],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}