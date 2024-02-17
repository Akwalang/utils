import { Stats } from 'fs';
export declare const stat: (...path: (string | string[])[]) => Promise<Stats | null>;
