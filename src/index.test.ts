import { createFeedSet } from './feed';

const testConfig = {
    siteTitle: 'example',
    siteDescription: 'example',
    siteLanguage: 'ja',
    siteCopyright: 'Tadashi Yamazaki',
    siteUrl: 'http://example.com',
    sourceDir: '.next',
    outDir: 'public',
    postsDir: 'posts',
    exclude: []
};

const testManifest = {
    build: {
        pages: {
            'example': []
        }
    },
    posts: [{
        pageProps:{
            postData:{
                id: 'test',
                title: 'test',
                contentHtml: 'test',
                date: '2020-01-01 00:00:00'
            }
        }
    }]
};

test('test', () => {
    const feed = createFeedSet(testConfig, testManifest);
    expect(feed).not.toBeNull();
    expect(feed.items).toStrictEqual([{
        title: 'test',
        id: `${testConfig.siteUrl}/${testConfig.postsDir}/${testManifest.posts[0].pageProps.postData.id}`,
        link: `${testConfig.siteUrl}/${testConfig.postsDir}/${testManifest.posts[0].pageProps.postData.id}`,
        date: expect.any(Date)
    }]);
});