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

test('transform', () => {
    const testManifest = {
        build: {
            pages: {
                'example': []
            }
        },
        posts: [{
            pageProps: {
                meta: {
                    title: 'test title',
                    description: 'test description',
                    canonical: 'test canonical'
                },
                date: '2020-02-02 00:00:00'
            }
        }]
    };
    const feed = createFeedSet({
        ...testConfig, transform: ({ pageProps }) => ({
            pageProps: {
                postData: {
                    id: pageProps.meta.canonical,
                    title: pageProps.meta.title,
                    contentHtml: pageProps.meta.description,
                    date: pageProps.date
                }
            }
        })
    }, testManifest);
    expect(feed).not.toBeNull();
    expect(feed.items).toStrictEqual([{
        title: testManifest.posts[0].pageProps.meta.title,
        id: `${testConfig.siteUrl}/${testConfig.postsDir}/${testManifest.posts[0].pageProps.meta.canonical}`,
        link: `${testConfig.siteUrl}/${testConfig.postsDir}/${testManifest.posts[0].pageProps.meta.canonical}`,
        date: new Date(testManifest.posts[0].pageProps.date)
    }]);
});