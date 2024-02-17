import fs from 'fs/promises';

import { resolve } from '../../path/resolve';
import { stat } from '../../path/stat';

export const remove = async function remove(path: string | string[]): Promise<void> {
  const target = resolve(path);

  const stt = await stat(target);

  if (!stt || !stt.isDirectory()) return;

  return fs.rm(target, { recursive: true });
};
