import fs from 'fs/promises';

import resolve from '../../path/resolve';

export default function remove(...path) {
  path = resolve(path);

  return fs.unlink(path);
}
