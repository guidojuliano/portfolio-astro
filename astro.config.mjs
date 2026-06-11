import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    server: {
      proxy: {
        '/api/games': {
          target: 'https://worldcup26.ir',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/games/, '/get/games')
        }
      }
    }
  }
});