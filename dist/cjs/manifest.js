"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadManifest = void 0;
var file_1 = require("./file");
exports.loadManifest = function (runtimePaths) {
    var build = file_1.loadFile(runtimePaths.BUILD_MANIFEST);
    var preRender = file_1.loadFile(runtimePaths.PRERENDER_MANIFEST, false);
    var posts = file_1.loadDir(runtimePaths.POST_DIR);
    return {
        build: build,
        preRender: preRender,
        posts: posts,
    };
};
