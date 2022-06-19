import fs from 'fs/promises';

import resolve from '../resolve/index.js';

export default async function stat(...path) {
  path = resolve(path);

  try {
    return await fs.lstat(path);
  } catch (e) {
    return null;
  }
}
