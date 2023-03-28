
import { defineConfig } from 'vite';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
    plugins: [],
    base: '/hobby/',
    define: {
      'process.env': {},
    },
  });