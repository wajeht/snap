import { defineConfig } from 'vite';

export default defineConfig({
	test: {
		globals: true,
		setupFilesAfterEnv: ['./src/utils/test-setup.js'],
	},
});
