import chalk from 'chalk';

import resolve from '../../src/path/resolve/index.js';
import dirname from '../../src/path/dirname/index.js';

import isFileExists from '../../src/file/isExists/index.js';

import readFile from '../../src/file/read/index.js';
import writeFile from '../../src/file/write/index.js';

const __dirname = dirname(import.meta);

const root = resolve(__dirname, '../..');

export default async function write(target, content) {
  const relative = target.replace(root, '').split('\\').join('/');
  const exists = await isFileExists(target);

  if (exists) {
    const current = await readFile(target);

    if (current === content) {
      console.log(`skip file: ${chalk.yellow(relative)}`);
      return 'skipped';
    }

    console.log(`update file: ${chalk.cyan(relative)}`);
  } else {
    console.log(`create file: ${chalk.green(relative)}`);
  }

  await writeFile(target, content);

  return exists ? 'updated' : 'created';
};
