import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  site: "https://www.kapehehula.com",
  integrations: [sitemap()],
});