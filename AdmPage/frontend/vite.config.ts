import { defineConfig } from 'vite';
import reactSupport from '@vitejs/plugin-react';
import dotenv from 'dotenv';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactSupport({
    babel: {
      parserOpts: {
        plugins: ['decorators-legacy', 'classProperties']
      }
    }
  })],
  server: {
    port: 3000
  }
});

