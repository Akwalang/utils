import fs from 'fs/promises';

import { resolve } from '../../path/resolve';

export const create = function create(...path: (string | string[])[]): Promise<string | undefined> {
  const target = resolve(...path);

  return fs.mkdir(target, { recursive: true });
};
