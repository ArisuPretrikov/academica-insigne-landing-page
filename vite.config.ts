import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
  server: {
    host: true, // Garante que a rede consiga acessar
    allowedHosts: true // <-- A linha mágica! Libera o acesso para qualquer link do Ngrok
  }
})
