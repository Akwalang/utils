import fs from 'fs/promises';

import resolve from '../../path/resolve/index.js';

import isExists from '../isExists/index.js';

export default async function read(...path) {
  path = resolve(path);

  const isDir = await isExists(path);

  return isDir ? fs.readdir(path) : [];
}
