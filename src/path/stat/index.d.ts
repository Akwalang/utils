import * as fs from 'fs';

declare function stat(...path: (string | string[])[]): Promise<fs.Stats | null>;

export default stat;
