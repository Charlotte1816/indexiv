// @ts-check
import { defineConfig } from 'astro/config';
// 参考文献
import rehypeCitation from 'rehype-citation';
// 数式
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// サイトマップ
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // Astro.site値
    site: "https://indexiv.org",
    // i18n設定
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ja'],
        routing: {
            prefixDefaultLocale: true,
        }
    },
    // markdown設定
    markdown: {
        // rehypePlugins
        rehypePlugins: [
            // 参考文献
            [rehypeCitation, {
                bibliography: './src/content/bibliography.bib',
                linkCitations: true,
            }],
            // 数式
            [rehypeKatex, {
                // マクロ
                macros: {
                    "\\bm": "\\boldsymbol",
                }
            }],
        ],
        // remrkPlugins
        remarkPlugins: [
            // 数式
            remarkMath,
        ]
    },
    // インテグレーション
    integrations: [
        // サイトマップ
        sitemap(),
    ]
});
