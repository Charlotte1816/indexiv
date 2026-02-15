import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const ja = defineCollection({
    type: "content",
    schema: z.object({
        category: z.string(),
        title: z.string(),
    }),
});

const en = defineCollection({
    type: "content",
    schema: z.object({
        category: z.string(),
        title: z.string(),
    }),
});

export const collections = {
    ja,
    en,
};