import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces, which Render requires
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000, // Use Render's PORT or default to 3000
  },
});
