import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import swup from '@swup/astro';
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  output: "static",
  adapter: cloudflare({
    imageService: 'compile'
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