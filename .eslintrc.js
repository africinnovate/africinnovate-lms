
module.exports = {
  root: true,
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended', 
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['dist/', 'node_modules/', '.eslintrc.js'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}