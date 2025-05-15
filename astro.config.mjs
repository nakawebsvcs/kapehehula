import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import netlify from "@astrojs/netlify";

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  adapter: netlify(),
  site: "https://www.kapehehula.com",
  integrations: [sitemap()],
  output: "server",
});