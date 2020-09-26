import fs from 'fs';
import path from 'path';

export const loadFile = <T>(path: string, throwError = true): T | undefined => {
    if (fs.existsSync(path)) {
        return require(path) as T;
    }
    if (throwError) {
        new Error(`${path} does not exist.`);
    }
};

export const loadDir = <T>(dirPath: string, throwError = true): T[] | undefined => {
    if (fs.existsSync(dirPath)) {
        const files: T[] = fs.readdirSync(dirPath).filter((file) => {
            return file.lastIndexOf('.json') !== -1;
        }).map((file) => {
            return require(path.join(dirPath, file)) as T;
        });
        return files;
    }
    if (throwError) {
        new Error(`${path} does not exist.`);
    }
};

export const exportFile = (filePath: string, content: string): void => {
    const folder = path.dirname(filePath)
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder)
    }
    fs.writeFileSync(filePath, content)
};