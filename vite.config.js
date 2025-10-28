import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      // Proxy que redireciona para o servidor PHP já funcionando
      '/api': {
        target: 'http://10.209.126.128',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/site-acqualife/Acqualife-web/Api'),
        secure: false,
      }
    },
  },
});