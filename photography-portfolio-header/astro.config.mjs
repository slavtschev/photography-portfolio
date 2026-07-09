import { defineConfig } from 'astro/config';

export default defineConfig({
  // Replace with your domain before deploying
  site: 'https://yourdomain.com',
  devToolbar: { enabled: false },
  vite: {
    cacheDir: '/tmp/vite-cache-photo-header',
  },
});
