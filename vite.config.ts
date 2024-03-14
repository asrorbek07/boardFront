import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({
      include: [/\.tsx?$/, /\.jsx?$/, /\.css$/],
    }),
  ],
  server: {
    port: 3000,

    proxy: {
      '/api/board': {
        target: 'http://localhost:9093',
        rewrite: (path) => path.replace('/api/board', '/'),
        changeOrigin: true,
        configure: (proxy) =>
          proxy.on('proxyReq', (proxy) =>
            console.log(`-> ${proxy.protocol}//${proxy.host}${proxy.path}`),
          ),
      },
      // '/api': {
      //   target: 'http://exp.vizend.io',
      //   rewrite: (path) => path.replace('/api', '/api'),
      //   changeOrigin: true,
      //   configure: (proxy) =>
      //       proxy.on('proxyReq', (proxy) =>
      //           console.log(`-> ${proxy.protocol}//${proxy.host}${proxy.path}`),
      //       ),
      // },
    },
  },
  base: '/board',
  build: {
    rollupOptions: {
      /**
       * Ignore "use client" waning since we are not using SSR
       * @see {@link https://github.com/TanStack/query/pull/5161#issuecomment-1477389761 Preserve 'use client' directives TanStack/query#5161}
       */
      onwarn(warning, warn) {
        if (
        warning.code === "MODULE_LEVEL_DIRECTIVE" &&
            warning.message.includes(`"use client"`)
        ) {
          return;
        }
        warn(warning);
      },
    },
  },
});