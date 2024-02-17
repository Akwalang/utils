import fs from 'fs/promises';
import { Stats } from 'fs';

import { resolve } from '../resolve';

export const stat = async function stat(...path: (string | string[])[]): Promise<Stats | null> {
  const target = resolve(...path);

  try {
    return await fs.lstat(target);
  } catch (e) {
    return null;
  }
};
