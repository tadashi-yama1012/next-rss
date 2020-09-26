"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFeedSet = void 0;
var feed_1 = require("feed");
exports.createFeedSet = function (config, manifest) {
    var _a;
    var feed = new feed_1.Feed({
        title: config.siteTitle,
        description: config.siteDescription,
        id: config.siteUrl,
        link: config.siteUrl,
        language: config.siteLanguage,
        copyright: config.siteCopyright
    });
    (_a = manifest.posts) === null || _a === void 0 ? void 0 : _a.forEach(function (post) {
        feed.addItem({
            title: post.pageProps.postData.title,
            id: config.siteUrl + "/" + config.postsDir + "/" + post.pageProps.postData.id,
            link: config.siteUrl + "/" + config.postsDir + "/" + post.pageProps.postData.id,
            date: new Date(post.pageProps.postData.date)
        });
    });
    feed.items.sort(function (a, b) {
        return b.date.getTime() - a.date.getTime();
    });
    return feed;
};
