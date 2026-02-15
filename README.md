# IndeXiv

## Project Structure

```text
/
|
├── public/
|
├── src/
|   |
│   └── content.config.ts
|   |
│   └── styles/
|   |   |
│   |   └── global.css
|   |
|   └── components/
|   |   |
|   |   └── Header.astro
|   |   |
|   |   └── Footer.astro
|   |   |
|   |   └── BaseLayout.astro
|   |   |
|   |   └── BreadCrumbs.astro
|   |
│   └── pages/
|   |   |
│   |   └── index.astro
|   |   |
|   |   └── rss.xml.js
|   |   |
|   |   └── en/
|   |   |   |
|   |   |   └── index.astro
|   |   |   |
|   |   |   └── about.astro
|   |   |   |
|   |   |   └── misc.astro
|   |   |   |
|   |   |   └── [category]/
|   |   |       |
|   |   |       └── index.astro
|   |   |       |
|   |   |       └── [slug].astro
|   |   |
|   |   └── ja/
|   |       |
|   |       └── index.astro
|   |       |
|   |       └── about.astro
|   |       |
|   |       └── misc.astro
|   |       |
|   |       └── [category]/
|   |           |
|   |           └── index.astro
|   |           |
|   |           └── [slug].astro
|   |
|   └── content/
|       |
|       └── en/
|       |   |
|       |   └── (category)/
|       |       |
|       |       └── (term).md
|       |
|       └── ja/
|           |
|           └── (category)/
|               |
|               └── (term).md
|
└── package.json
|
└── astro.config.mjs
```
