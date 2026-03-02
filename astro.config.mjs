import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zacharylong.com',
  integrations: [sitemap()],
});
