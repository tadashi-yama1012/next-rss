import { loadConfig } from "./config";
import { loadManifest } from "./manifest";
import { getRuntimePaths, KNOWN_PATHS } from "./path";
import { createFeedSet } from "./feed";
import { exportFile } from "./file";

const config = loadConfig(KNOWN_PATHS.CONFIG_FILE);
const runtimePaths = getRuntimePaths(config);
const manifest = loadManifest(runtimePaths);
const feed = createFeedSet(config, manifest);
exportFile(runtimePaths.RSS_FILE, feed.rss2());
exportFile(runtimePaths.ATOM_FILE, feed.atom1());