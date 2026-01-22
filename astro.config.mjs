import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import swup from '@swup/astro';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    swup({
      cache: true,
    }),
    mdx({
      gfm: true,
      rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: [] }]],
    })],
});