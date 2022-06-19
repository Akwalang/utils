import fs from 'fs/promises';
import { dirname } from 'path';

import createDir from '../../directory/create/index.js';
import resolve from '../../path/resolve/index.js';

export default async function write(dest, data, options = {}) {
  dest = resolve(dest);
  data = typeof data === 'string' ? data : JSON.stringify(data);

  const directory = dirname(dest);

  await createDir(directory);

  return fs.writeFile(dest, data, options);
}
