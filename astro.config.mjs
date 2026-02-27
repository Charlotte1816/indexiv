import { defineConfig } from 'astro/config';
import rehypeCitation from 'rehype-citation';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: "https://indexiv.org",
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ja'],
        routing: {
            prefixDefaultLocale: true,
        }
    },
    markdown: {
        rehypePlugins: [
            [rehypeCitation, {
                bibliography: './src/content/bibliography.bib',
                linkCitations: true,
            }],
            [rehypeKatex, {
                macros: {
                    "\\bm": "\\boldsymbol",
                }
            }],
        ],
        remarkPlugins: [
            remarkMath,
        ]
    },
    integrations: [
        sitemap(),
    ]
});
