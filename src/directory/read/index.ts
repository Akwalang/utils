import fs from 'fs/promises';

import resolve from '../../path/resolve';

import isExists from '../isExists';

export default async function read(...path: (string | string[])[]): Promise<string[]> {
  const target = resolve(...path);

  const isDir = await isExists(target);

  return isDir ? fs.readdir(target) : [];
}
