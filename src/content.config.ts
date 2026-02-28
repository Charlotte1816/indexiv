import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const ja = defineCollection({
    type: "content",
    schema: z.object({
        category: z.string(),
        subcategory: z.string(),
        title: z.string(),
        description: z.string(),
        order: z.number(),
    }),
});

const en = defineCollection({
    type: "content",
    schema: z.object({
        category: z.string(),
        subcategory: z.string(),
        title: z.string(),
        description: z.string(),
        order: z.number(),
    }),
});

export const collections = {
    ja,
    en,
};