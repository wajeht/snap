import { defineConfig } from 'vite';

export default defineConfig({
	test: {
		clearMocks: true,
		globals: true,
		setupFilesAfterEnv: ['./src/utils/test-setup.js'],
	},
});
