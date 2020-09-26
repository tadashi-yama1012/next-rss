import { Feed } from 'feed';
import { IConfig, INextManifest } from './interface';

export const createFeedSet = (
    config: IConfig,
    manifest: INextManifest
): Feed => {
    const feed = new Feed({
        title: config.siteTitle,
        description: config.siteDescription,
        id: config.siteUrl,
        link: config.siteUrl,
        language: config.siteLanguage,
        copyright: config.siteCopyright
    });
    manifest.posts?.forEach((post) => {
        feed.addItem({
            title: post.pageProps.postData.title,
            id: `${config.siteUrl}/${config.postsDir}/${post.pageProps.postData.id}`,
            link: `${config.siteUrl}/${config.postsDir}/${post.pageProps.postData.id}`,
            date: new Date(post.pageProps.postData.date)
        });
    });
    feed.items.sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
    });
    return feed;
};