import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from "vite-plugin-pwa";
import mkcert from 'vite-plugin-mkcert'
import fs from 'fs';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({

  server: {
    https:{
      key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')),
    },
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
  plugins: [react(),
    mkcert(),
    VitePWA({ registerType: 'autoUpdate',
      manifest:{
        name: "Чашка Кофе",
        short_name: "Чашка Кофе",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#573821",
        orientation: "portrait-primary",
        icons: [
          {
            src: "/WEB-frontend-make-coffe/iconCoffee.png",
            type: "image/png",
            sizes: "192x192"
          },
        ],
        screenshots: [
          {
            src: "/WEB-frontend-make-coffe/img.png",
            sizes: "217x469",
            type: "image/png"
          }
        ]
      }
    })],
  base: "/WEB-frontend-make-coffe",
});
