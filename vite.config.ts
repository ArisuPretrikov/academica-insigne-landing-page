import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/academica-insigne-landing-page/',
  plugins: [
    tailwindcss(),
    react()],
  server: {
    host: true,
    allowedHosts: true
  }
})
