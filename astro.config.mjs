// @ts-check
import { defineConfig } from 'astro/config';

import rehypeCitation from 'rehype-citation';

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
                // csl: './src/content/citation-style.csl',
                linkCitations: true,
            }],
        ],
        // remrkPlugins
        remarkPlugins: [
            // ここにremarkプラグインを追加できます
        ]
    },
});
