/// <reference types="node" />
import fs from 'fs/promises';
declare type Options = Parameters<typeof fs.readFile>[1];
export declare const read: (path: string | string[], options?: Options) => Promise<string | Buffer>;
export {};
