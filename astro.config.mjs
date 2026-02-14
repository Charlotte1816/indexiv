// @ts-check
import { defineConfig } from 'astro/config';
import rehypeCitation from 'rehype-citation';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
    site: 'https://indexiv.org',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ja'],
        routing: {
            prefixDefaultLocale: true,
        },
    },

    markdown: {
        remarkPlugins: [
            [remarkToc, { heading: "ToC", maxDepth: 3 }],
        ],
        rehypePlugins: [
            [rehypeCitation, { bibliography: "src/content/ref.bib", csl: "src/csl/numeric-brackets.csl", linkCitations: true }],
        ],
    },
});
