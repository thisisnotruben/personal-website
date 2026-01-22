import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';


const entryData = ({ image }) => z.object({
    releaseDate: z.date(),
    title: z.string(),
    id: z.string(),
    cover: z.nullable(image()),
    table: z.record(z.string(),
        z.union([
            z.array(z.string()),
            z.object({
                link: z.string(),
                text: z.string()
            })]))
});


const project = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/project" }),
    schema: entryData,
})

export const collections = { project };
