import { resolve } from '../../path/resolve';
import { stat } from '../../path/stat';

import { remove as removeDirectory } from '../remove';
import { remove as removeFile } from '../../file/remove';

import { read } from '../read';

export const clean = async function clean(...path: (string | string[])[]): Promise<void> {
  const target = resolve(...path);

  const children = await read(target);

  for (let i = 0, len = children.length; i < len; i++) {
    const child = resolve(target, children[i]);

    const stt = await stat(child);

    if (stt && stt.isDirectory()) await removeDirectory(child);
    if (stt && stt.isFile()) await removeFile(child);
  }
};
