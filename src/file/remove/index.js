import fs from 'fs/promises';

import resolve from '../../path/resolve/index.js';

export default function remove(...path) {
  path = resolve(path);

  return fs.unlink(path);
}
