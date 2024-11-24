import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "node:path";
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
    dts({
      entryRoot: 'src',
      outputDir: 'dist',
      insertTypesEntry: true,
    }),
  ],
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
