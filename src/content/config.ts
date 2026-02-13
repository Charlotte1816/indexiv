import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    indexKey: z.string(),
    tags: z.array(z.string()).optional(),
    core: z.boolean().optional(),
});

export const collections = {
    en: defineCollection({
        type: "content",
        schema: baseSchema,
    }),
    ja: defineCollection({
        type: "content",
        schema: baseSchema,
    }),
};