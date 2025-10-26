import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.moveroo.com.au',
  integrations: [sitemap({ entryLimit: 45000 })]
});
