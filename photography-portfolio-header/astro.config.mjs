import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: replace with the real production domain before deploying.
  // Also update the Sitemap line in public/robots.txt to match.
  site: 'https://yourdomain.com',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  vite: {
    cacheDir: '/tmp/vite-cache-photo-header',
  },
});
