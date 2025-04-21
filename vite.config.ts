import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración base sin aliases automáticos desde tsconfig
export default defineConfig({
  plugins: [
    react(), // ✅ Plugin React
  ],
});
