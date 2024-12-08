import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      // Проксирование запросов, начинающихся с /api
      '/api': {
        target: 'http://localhost:8000', // Адрес вашего backend-сервера
        changeOrigin: true, // Изменяет заголовок Origin на target
        rewrite: (path) => path.replace(/^\/api/, ''), // Убираем префикс /api из запроса
      },
    },
  },
  plugins: [react()],
  base: "/WEB-frontend-make-coffe",
});
