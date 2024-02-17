import fs from 'fs/promises';

import { resolve } from '../../path/resolve';
import { isString } from '../../is/string';

type Options = Parameters<typeof fs.readFile>[1];

const DEFAULTS: Options = {
  encoding: 'utf8',
};

export const read = function read(path: string | string[], options?: Options): Promise<string | Buffer> {
  path = resolve(path);
  options = Object.assign({}, DEFAULTS, isString(options) ? { encoding: options } : options);

  return fs.readFile(path, options);
}
