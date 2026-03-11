import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Three.js into its own chunk so it only loads when needed
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          // Split react-icons (large) into its own chunk
          'icons': ['react-icons'],
          // Split GSAP
          'gsap-vendor': ['gsap'],
        },
      },
    },
    // Increase chunk size warning limit slightly for Three.js
    chunkSizeWarningLimit: 800,
  },
})
