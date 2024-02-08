import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/personal_website/', // Set base path directly here
  build: {
    outDir: './docs',
  },
});
