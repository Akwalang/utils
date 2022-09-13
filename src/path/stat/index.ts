import fs from 'fs/promises';
import _fs from 'fs';

import resolve from '../resolve';

export = async function stat(...path: (string | string[])[]): Promise<_fs.Stats | null> {
  const target = resolve(...path);

  try {
    return await fs.lstat(target);
  } catch (e) {
    return null;
  }
}
