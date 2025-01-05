
module.exports = {
  root: true,
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended', 
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignores: ['dist/', 'node_modules/'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}