import fs from 'fs/promises';

import resolve from '../../path/resolve'
import stat from '../../path/stat'

import removeFile from '../../file/remove/index.js';

import read from '../read';

export default async function remove(...path) {
  path = resolve(path);

  const children = await read(path);

  for (let i = 0, len = children.length; i < len; i++) {
    const child = resolve(path, children[i]);

    const stt = await stat(child);

    if (stt.isDirectory()) await remove(child);
    if (stt.isFile()) await removeFile(child);
  }

  const stt = await stat(path);

  if (!stt || !stt.isDirectory()) return;

  return fs.rmdir(path);
}
