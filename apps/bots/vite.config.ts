import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    extensions: ['.tsx', '.jsx', '.js', '.ts'],
  },
  server: {
    host: '0.0.0.0',
    port: 8082,
    proxy: {
      '/v1': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        ws: true,
      },
    }
  }
})
