import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../../packages/shared-components/src'),
      '@kit': path.resolve(__dirname, '../../packages/ai-frontend-kit/src'),
    },
  },
  server: {
    port: 5174,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})