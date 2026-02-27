import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const enDocs = await getCollection('en');

    return rss({
        title: 'IndeXiv',
        description: 'Notes on theoretical physics.',
        site: context.site,
        items: enDocs.map((post) => {
            const [category, slug] = post.slug.split('/');
            return {
                title: post.data.title,
                pubDate: new Date(),
                description: `${post.data.title}`,
                link: `/en/${category}/${slug}/`,
            };
        }),
        customData: `<language>en-us</language>`,
    });
}