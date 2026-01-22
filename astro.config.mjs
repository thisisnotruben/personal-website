import { defineConfig } from 'astro/config';
import swup from '@swup/astro';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: "static",
  adapter: cloudflare(),
  integrations: [
    swup({
      cache: true,
    }),
    mdx({
      gfm: true,
      rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: [] }]],
    })],
});