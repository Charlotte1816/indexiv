// RSSフィードを生成するためのエンドポイント
import rss from '@astrojs/rss';
// AstroのコンテンツAPIを使用
import { getCollection } from 'astro:content';

// RSSフィードを生成するためのGETリクエストハンドラー
export async function GET(context) {
    // 英語のコレクションを取得
    const enDocs = await getCollection('en');

    return rss({
        // RSSフィードのタイトル
        title: 'IndeXiv',
        // RSSフィードの説明
        description: 'Index for theoretical physics.',
        // サイトのURLを指定
        site: context.site,
        // 記事データを RSS 用のフォーマットに変換
        items: enDocs.map((post) => {
            // slugをcategoryとslugに分割
            const [category, slug] = post.slug.split('/');
            // RSSアイテムのフォーマットを生成
            return {
                // 記事のタイトル
                title: post.data.title,
                // schemaの日付を使用，なければ現在日時を使用
                pubDate: post.data.pubDate || new Date(),
                // 記事の説明
                description: `Explanation of ${post.data.title}`,
                // URLを生成
                link: `/en/${category}/${slug}/`,
            };
        }),
        // RSSフィードのカスタムデータ
        customData: `<language>en-us</language>`,
    });
}