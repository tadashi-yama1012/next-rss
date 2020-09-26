import { IConfig } from "./interface";
export declare const withDefaultConfig: (config: Partial<IConfig>) => IConfig;
export declare const loadConfig: (path: string) => IConfig;
