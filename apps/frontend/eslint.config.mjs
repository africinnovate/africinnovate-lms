import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		rules: {
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-explicit-any': 'off',
		},
		ignores: [
			'node_modules',
			'.next',
			'public',
			'dist/',
			'build/',
			'coverage/',
			'.env',
			'.env.local',
			'.env.development.local',
			'.env.test.local',
			'.env.production.local',
			'*.min.js',
			'*.min.css',
			'package-lock.json',
			'pnpm-lock.yaml',
			'yarn.lock',
			'.turbo',
			'.next',
			'logs/',
			'*.log',
			'*.cache',
			'*.tmp',
			'*.bak',
			'*.swp',
			'*.DS_Store',
			'.vscode/',
			'.idea/',
			'*.iml',
			'*.sublime-project',
			'*.sublime-workspace',
			'*.code-workspace',
			'*.config.json',
			'tests/',
			'__tests__/',
			'*.test.js',
			'*.test.ts',
			'*.spec.js',
			'*.spec.ts',
      '**/*.config.js',
		],
	},
]

export default eslintConfig
