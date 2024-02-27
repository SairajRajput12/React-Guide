import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/main.jsx',
    },
  },
  server: {
    proxy: {
      "/places": "http://localhost:3000/", // the address that u serve in the backend 
      "/user-places": "http://localhost:3000/",
    },
  },
})