import fs from 'fs/promises';

import resolve from '../../path/resolve';

const DEFAULTS = {
  encoding: 'utf8',
};

export default function read(path, options = {}) {
  path = resolve(path);
  options = Object.assign({}, DEFAULTS, options);

  return fs.readFile(path, options);
}
