import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',          // project root
  publicDir: 'public', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
