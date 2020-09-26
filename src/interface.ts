export interface IConfig {
    siteTitle: string
    siteDescription: string
    siteLanguage: string
    siteCopyright: string
    siteUrl: string
    sourceDir?: string
    outDir?: string
    exclude?: string[]
    postsDir?: string
}

export interface IRuntimePaths {
    BUILD_MANIFEST: string
    PRERENDER_MANIFEST: string
    EXPORT_MARKER: string
    POST_DIR: string
    RSS_FILE: string
    ATOM_FILE: string
}

export interface IExportMarker {
    exportTrailingSlash: boolean
}

export interface IBuildManifest {
    pages: {
        [key: string]: string[]
    }
}
  
export interface IPreRenderManifest {
    routes: {
        [key: string]: any
    }
}

export interface IPostsType {
    pageProps:{
        postData:{
            id: string
            title: string
            contentHtml: string
            date: string
        }
    }
}

export interface INextManifest {
    build: IBuildManifest
    preRender?: IPreRenderManifest
    posts?: IPostsType[]
}