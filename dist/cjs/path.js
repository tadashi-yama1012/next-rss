"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KNOWN_PATHS = exports.getRuntimePaths = void 0;
var path_1 = __importDefault(require("path"));
var getPath = function () {
    var pathSegment = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        pathSegment[_i] = arguments[_i];
    }
    return path_1.default.resolve.apply(path_1.default, __spreadArrays([process.cwd()], pathSegment));
};
exports.getRuntimePaths = function (config) {
    return {
        BUILD_MANIFEST: getPath(config.sourceDir, 'build-manifest.json'),
        PRERENDER_MANIFEST: getPath(config.sourceDir, 'prerender-manifest.json'),
        EXPORT_MARKER: getPath(config.sourceDir, 'export-marker.json'),
        POST_DIR: getPath(config.sourceDir, 'server', 'pages', 'posts'),
        RSS_FILE: getPath(config.outDir, 'rss.xml'),
        ATOM_FILE: getPath(config.outDir, 'atom.xml')
    };
};
exports.KNOWN_PATHS = {
    CONFIG_FILE: getPath('next-rss.js'),
};
