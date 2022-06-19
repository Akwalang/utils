import resolve from '../../path/resolve'
import stat from '../../path/stat'

import removeDirectory from '../remove/index.js';
import removeFile from '../../file/remove/index.js';

import read from '../read';

export default async function clean(...path) {
  path = resolve(path);

  const children = await read(path);

  for (let i = 0, len = children.length; i < len; i++) {
    const child = resolve(path, children[i]);

    const stt = await stat(child);

    if (stt.isDirectory()) await removeDirectory(child);
    if (stt.isFile()) await removeFile(child);
  }
}
