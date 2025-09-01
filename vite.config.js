import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react()
, tailwindcss()
  ],
  server: {
    proxy: {
      '/api/proxy': {
        target: 'http://localhost:3000', // or your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/proxy/, '/api/proxy'),
      },
    },
  },
})
