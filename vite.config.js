import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.mp4'],
  plugins: [react()],
  base: "/portfolio-jerry",
  build: { chunkSizeWarningLimit: 1600, }
})