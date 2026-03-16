import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cisco-messaging/',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
      '/static/storage': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})
