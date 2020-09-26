"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportFile = exports.loadDir = exports.loadFile = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
exports.loadFile = function (path, throwError) {
    if (throwError === void 0) { throwError = true; }
    if (fs_1.default.existsSync(path)) {
        return require(path);
    }
    if (throwError) {
        new Error(path + " does not exist.");
    }
};
exports.loadDir = function (dirPath, throwError) {
    if (throwError === void 0) { throwError = true; }
    if (fs_1.default.existsSync(dirPath)) {
        var files = fs_1.default.readdirSync(dirPath).filter(function (file) {
            return file.lastIndexOf('.json') !== -1;
        }).map(function (file) {
            return require(path_1.default.join(dirPath, file));
        });
        return files;
    }
    if (throwError) {
        new Error(path_1.default + " does not exist.");
    }
};
exports.exportFile = function (filePath, content) {
    var folder = path_1.default.dirname(filePath);
    if (!fs_1.default.existsSync(folder)) {
        fs_1.default.mkdirSync(folder);
    }
    fs_1.default.writeFileSync(filePath, content);
};
