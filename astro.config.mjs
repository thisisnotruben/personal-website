import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import swup from '@swup/astro';

export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [new swup({ cache: true })],
});