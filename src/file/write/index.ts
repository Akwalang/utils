import fs from 'fs/promises';
import { dirname } from 'path';

import createDir from '../../directory/create';
import resolve from '../../path/resolve';

type Data = Parameters<typeof fs.writeFile>[1];
type Options = Parameters<typeof fs.writeFile>[2];

export default async function write(
  dest: string | string[],
  data: Data,
  options?: Options
): Promise<void> {
  dest = resolve(dest);
  const directory = dirname(dest);

  await createDir(directory);

  return fs.writeFile(dest, data, options);
}
