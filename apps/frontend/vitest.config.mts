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
			reporter: ['text', 'html', 'json'], // Reporting formats
		},
		setupFiles: './vitest.setup.ts',
		alias: {
			'@': '/src/app',
		},
	},
})
