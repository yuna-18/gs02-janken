import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    open: true,
    watch: {
      usePolling: true, // Dropboxのファイルを監視するためのオプション
    },
  },
  resolve: {
    alias: {
      '@': '/src', // エイリアスを設定
    },
  },
});
