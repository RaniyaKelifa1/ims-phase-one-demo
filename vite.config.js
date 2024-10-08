// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(), // Enables React Fast Refresh and JSX transformation
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'), // Alias for easier imports
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  server: {
    port: 3000, // Custom server port
    open: true, // Opens the app in the default browser on start
    proxy: {
      // Setup for any API proxying
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist', // Output directory for the build
    sourcemap: true, // Generate source maps for easier debugging
  },
});
