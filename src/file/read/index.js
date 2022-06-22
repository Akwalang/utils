import fs from 'fs/promises';

import resolve from '../../path/resolve/index.js';
import isObject from '../../is/object/index.js';

const DEFAULTS = {
  encoding: 'utf8',
};

export default function read(path, options) {
  path = [...arguments];
  options = Object.assign({}, DEFAULTS);

  const last = path[path.length - 1];

  if (isObject(last)) {
    path = path.slice(0, -1);
    options = Object.assign(options, last);
  }

  path = resolve(path);

  return fs.readFile(path, options);
}
