import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ChainTypes',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
