# next-rss

next-rss is an RSS generation library for next.js apps.

## installation

```sh
npm install next-rss
```

## usage
Create the next-rss.js file in your project's root directory.
```js
module.exports = {
    siteTitle: 'example web site',
    siteDescription: 'example web site rss feed',
    siteLanguage: 'en',
    siteCopyright: '©Tadashi Yamazaki',
    siteUrl: 'http://example.com',
    outDir: 'public',
    postsDir: 'posts',
}
```
Then run this command.
```sh
npm run next-rss
```