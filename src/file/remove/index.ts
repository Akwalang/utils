import fs from 'fs/promises';

import resolve from '../../path/resolve';

export default function remove(...path: (string | string[])[]): Promise<void> {
  const target = resolve(...path);

  return fs.unlink(target);
}
