import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    proxy: {
      '/api': {
        target: 'https://my-server-khaki.vercel.app',
        changeOrigin: true,
        rewrite(path) {
          return path.replace(/^\/api/, '/api/portfolio')
        },
      }
    }
  }
})
