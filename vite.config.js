import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    brotliSize: false, // Brotli unsupported in StackBlitz
    rollupOptions: {
      input: {
        test1: resolve(__dirname, './test1/index.html'),
        test2: resolve(__dirname, './test2/index.html'),
      },
    },
  },
})
