import { loadDir, loadFile } from "./file";
import { IBuildManifest, INextManifest, IPostsType, IPreRenderManifest, IRuntimePaths } from "./interface";

export const loadManifest = (runtimePaths: IRuntimePaths): INextManifest => {
    const build = loadFile<IBuildManifest>(runtimePaths.BUILD_MANIFEST)!;
    const preRender = loadFile<IPreRenderManifest>(runtimePaths.PRERENDER_MANIFEST, false);
    const posts = loadDir<IPostsType>(runtimePaths.POST_DIR)!;
    return {
        build,
        preRender,
        posts,
    };
};
  