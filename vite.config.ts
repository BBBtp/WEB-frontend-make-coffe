import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from "vite-plugin-pwa";
import mkcert from 'vite-plugin-mkcert';
import fs from 'fs';
import path from 'path';
import {api_proxy_addr, img_proxy_addr} from "./target_config"

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')),
    },
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [
    react(),
    mkcert(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Чашка Кофе",
        short_name: "Чашка Кофе",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#573821",
        orientation: "portrait-primary",
        icons: [
          {
            src: "/iconCoffee.png",
            type: "image/png",
            sizes: "192x192"
          },
        ],
      },
    }),
  ],
});
