import path from 'path';

import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [eslint({ lintOnStart: true }), react()],
  resolve: { alias: { '@': path.resolve(import.meta.dirname, './src') } },
});
