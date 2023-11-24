import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  svgr()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    extensions: ['.tsx', '.jsx', '.js', '.ts'],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8081,
    proxy: {
      '/v1': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        ws: true,
      },
    }
  }
})
