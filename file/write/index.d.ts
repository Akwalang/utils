import fs from 'fs/promises';
declare type Data = Parameters<typeof fs.writeFile>[1];
declare type Options = Parameters<typeof fs.writeFile>[2];
export declare const write: (dest: string | string[], data: Data, options?: Options) => Promise<void>;
export {};
