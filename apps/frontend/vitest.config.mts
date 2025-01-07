import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	test: {
		environment: 'jsdom',
		globals: true,
		coverage: {
			provider: 'v8', // Code coverage provider
			reporter: ['text', 'html', 'json'],
			include: ['src/app/**/*'],
			thresholds: {
				global: {
					statements: 75,
					branches: 75,
					functions: 75,
					lines: 75,
				},
			},
			enabled: true,
		},
		setupFiles: './vitest.setup.ts',
		alias: {
			'@': '/src/app',
		},
	},
})
