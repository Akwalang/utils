import fs from 'fs/promises';

import resolve from '../../path/resolve';

export default function create(...path: (string | string[])[]): Promise<string | undefined> {
  const target = resolve(...path);

  return fs.mkdir(target, { recursive: true });
}
