import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@tokens': path.resolve(__dirname, 'src/tokens'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@stories': path.resolve(__dirname, 'src/stories'),
    },
  },
});
