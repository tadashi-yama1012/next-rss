import path from 'path';
import { IConfig, IRuntimePaths } from './interface';

const getPath = (...pathSegment: string[]): string => {
    return path.resolve(process.cwd(), ...pathSegment);
};

export const getRuntimePaths = (config: IConfig): IRuntimePaths => {
    return {
        BUILD_MANIFEST: getPath(config.sourceDir!, 'build-manifest.json'),
        PRERENDER_MANIFEST: getPath(config.sourceDir!, 'prerender-manifest.json'),
        EXPORT_MARKER: getPath(config.sourceDir!, 'export-marker.json'),
        POST_DIR: getPath(config.sourceDir!, 'server', 'pages', 'posts'),
        RSS_FILE: getPath(config.outDir!, 'rss.xml'),
        ATOM_FILE: getPath(config.outDir!, 'atom.xml')
    };
};

export const KNOWN_PATHS = {
    CONFIG_FILE: getPath('next-rss.js'),
};