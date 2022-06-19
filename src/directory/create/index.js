import fs from 'fs/promises';

import resolve from '../../path/resolve';

export default function create(...path) {
  path = resolve(path);

  return fs.mkdir(path, { recursive: true });
}
