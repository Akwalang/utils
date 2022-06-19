import resolve from '../../path/resolve/index.js';

import read from '../read/index.js';

export default async function readDeep(...path) {
  let items = await read(path);

  items = items.map(item => resolve(path, item));

  const result = [];

  for (let i = 0; i < items.length; i++) {
    const children = await readDeep(items[i]);

    result.push(...children, items[i]);
  }

  return result;
}
