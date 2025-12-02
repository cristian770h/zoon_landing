import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'vite.svg'],
      manifest: {
        name: 'Zoon Game',
        short_name: 'Zoon',
        description: 'Landing page for Zoon Game',
        theme_color: '#050018',
        icons: [
          {
            src: 'public/icons/icono.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ],
        screenshots: [
          {
            src: '/icons/mapa1.jpeg',
            sizes: '1280x720',
            type: 'image/jpeg',
            form_factor: 'wide',
            label: 'Mapa del Juego'
          },
          {
            src: '/icons/iniciojuego.jpeg',
            sizes: '1280x720',
            type: 'image/jpeg',
            label: 'Inicio del Juego'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpeg}'],
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024, // 6mb
      },
      devOptions: {
        enabled: true
      }
    })
  ],
})
