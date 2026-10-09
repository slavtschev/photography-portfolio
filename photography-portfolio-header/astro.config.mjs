import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://photography-portfolio-mblofr61c-slavtschev1.vercel.app',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  vite: {
    cacheDir: '/tmp/vite-cache-photo-header',
  },
});
