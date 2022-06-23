import readDir from '../../src/directory/read/index.js';
import isExistsDir from '../../src/directory/isExists/index.js';

import readFile from '../../src/file/read/index.js';
import writeFile from '../../src/file/write/index.js';

import args from '../../src/process/args/index.js';
import resolve from '../../src/path/resolve/index.js';
import dirname from '../../src/path/dirname/index.js';
import template from '../../src/string/template/index.js';
import capitalize from '../../src/string/capitalize/index.js';

const __dirname = dirname(import.meta);

const files = await readDir(__dirname, 'templates');

const tpls = [];

for (let i = 0, len = files.length; i < len; i++) {
  const template = await readFile([__dirname, 'templates', files[i]]);

  tpls.push({ name: files[i], template });
}

const [name, method] = args().name.split('.');

if (!name || !method) {
  throw new Error('Module and Method names should be written in format "module.method"');
}

const rootDir = resolve(__dirname, '../../src/', name, method);

const exists = await isExistsDir(rootDir);

if (exists) {
  throw new Error('Method already exists in Module');
}

const stack = tpls.map(tpl => {
  const fileName = resolve(rootDir, tpl.name.slice(0, -4));
  const content = template(tpl.template, { module: { name: capitalize(name), method } });

  return writeFile(fileName, content);
});

await Promise.all(stack);

console.log('Done!');
