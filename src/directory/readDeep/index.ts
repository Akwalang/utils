import { resolve } from '../../path/resolve';

import { read } from '../read';

export const readDeep = async function readDeep(path: string | string[]): Promise<string[]> {
  let items = await read(path);

  items = items.map(item => resolve(path, item));

  const result = [];

  for (let i = 0; i < items.length; i++) {
    const children = await readDeep(items[i]);

    result.push(...children, items[i]);
  }

  return result;
};
