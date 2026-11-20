import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import swup from '@swup/astro';
import tina from '@tinacms/astro/integration';
import { tinaAdminDevRedirect } from '@tinacms/astro/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
    output: "static",
    adapter: node({ mode: 'standalone', }),
    integrations: [swup({ cache: true, }), mdx(), tina()],
    vite: {
        plugins: [tinaAdminDevRedirect()],
    },
});