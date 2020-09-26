"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfig = exports.withDefaultConfig = void 0;
var deepmerge_1 = require("@corex/deepmerge");
var file_1 = require("./file");
var defaultConfig = {
    sourceDir: '.next',
    outDir: 'public',
    postsDir: 'posts',
    exclude: []
};
var updateConfig = function (currConfig, newConfig) {
    return deepmerge_1.merge([currConfig, newConfig], {
        arrayMergeType: 'overwrite',
    });
};
exports.withDefaultConfig = function (config) {
    return updateConfig(defaultConfig, config);
};
exports.loadConfig = function (path) {
    var baseConfig = file_1.loadFile(path);
    return exports.withDefaultConfig(baseConfig);
};
