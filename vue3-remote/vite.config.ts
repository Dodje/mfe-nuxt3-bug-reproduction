import { fileURLToPath, URL } from 'node:url'
import federation from "@originjs/vite-plugin-federation";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
        name: 'vue3-remote',
        filename: 'remoteEntry.js',
        // Modules to expose
        exposes: {
            './Button': './src/components/Button.vue',
        },
        shared: ['vue']
    })
  ],
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
