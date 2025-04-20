// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// Configuración base con soporte de aliases automáticos desde tsconfig
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // ✅ Activa los aliases definidos en tsconfig.json automáticamente
  ],
});
