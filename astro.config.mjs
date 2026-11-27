import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gblll.github.io',
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-dimmed',
      },
      defaultColor: false,
      wrap: true,
    },
  },
});
