import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import swup from '@swup/astro';
import mdx from '@astrojs/mdx';
import rehypeFormat from 'rehype-format';
import inspectUrls from '@jsdevtools/rehype-url-inspector'
;
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
      smartypants: true,
      remarkPlugins: [],
      rehypePlugins: [inspectUrls, rehypeFormat],
    })],
});