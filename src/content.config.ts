import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';


const project = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/project" }),
    schema: ({ image }) => z.object({
        releaseDate: z.date(),
        title: z.string(),
        id: z.string(),
        cover: image(),
        table: z.object({}),
    })
});

export const collections = { project };
