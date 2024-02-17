const chalk = require('chalk');

const resolve = require('../../dist/path/resolve/index.js').resolve;

const isFileExists = require('../../dist/file/isExists/index.js').isExists;
const readFile = require('../../dist/file/read/index.js').read;
const writeFile = require('../../dist/file/write/index.js').write;

const root = resolve(__dirname, '../..');

module.exports = async function write(target, content) {
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
