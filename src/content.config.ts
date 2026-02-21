// astro:content をインポートしてコレクションを定義
import { defineCollection } from 'astro:content';
// Zod をインポートしてスキーマを定義
import { z } from 'astro/zod';

// 日本語のコレクションを定義
const ja = defineCollection({
    type: "content",
    schema: z.object({
        category: z.string(),
        title: z.string(),
        description: z.string(),
    }),
});

// 英語のコレクションを定義
const en = defineCollection({
    type: "content",
    schema: z.object({
        category: z.string(),
        title: z.string(),
        description: z.string(),
    }),
});

// コレクションをエクスポート
export const collections = {
    ja,
    en,
};