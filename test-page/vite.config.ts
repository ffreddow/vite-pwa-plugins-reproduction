import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { VitePWA } from 'vite-plugin-pwa';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact(),
	VitePWA({
		minify: false,
		strategies: 'injectManifest',
		injectRegister: false,
		injectManifest: {
			minify: false,
			injectionPoint: null,
			buildPlugins: {
				vite: [
					wasm(),
					topLevelAwait(),
				],
			},
		},
		manifest: false,
		devOptions: {
			enabled: true,
			type: 'module',
		},
		srcDir: 'src',
		filename: 'sw.ts',
	})]
});
