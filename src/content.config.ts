import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';


const entryBody = z.object({
    releaseDate: z.date(),
    title: z.string(),
    id: z.string(),
    imgDir: z.string(),
    table: z.array(z.object({
        key: z.string(),
        value: z.object({
            type: z.string(),
            value: z.union([
                z.array(z.string()),
                z.object({
                    text: z.string(),
                    link: z.string()
                })
            ])
        })
    }))
});

const thoughtsBody = z.object({
    title: z.string(),
    draft: z.boolean(),
    pubDatetime: z.date(),
    modDatetime: z.date(),
    tags: z.array(z.string()),
    description: z.string(),
});

const project = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/project" }),
    schema: ({ image }) => z.object({
        cover: z.nullable(image()),
        body: entryBody,
    }),
})

const thoughts = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/thought" }),
    schema: ({ image }) => z.object({
        cover: z.nullable(image()),
        body: thoughtsBody
    }),
})

export type EntryBody = z.infer<typeof entryBody>;
export type ThoughtsBody = z.infer<typeof thoughtsBody>;
export const collections = { project, thoughts };
