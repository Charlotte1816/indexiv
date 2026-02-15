// @ts-check
import { defineConfig } from 'astro/config';

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
});
