import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    minify: 'oxc',
    cssMinify: 'lightningcss',
    modulePreload: { polyfill: false },
    rolldownOptions: {
      output: {
        entryFileNames: 'assets/main.min.js',
        assetFileNames: ({ names }) =>
          names.some((name) => name.endsWith('.css'))
            ? 'assets/main.min.css'
            : 'assets/[name]-[hash][extname]',
      },
    },
  },
});
