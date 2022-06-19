import fs from 'fs/promises';

import resolve from '../../path/resolve/index.js';

export default async function isExists(...target) {
  target = resolve(target);

  try {
    const stat = await fs.lstat(target);

    return stat.isDirectory();
  } catch (e) {
    return false;
  }
}
