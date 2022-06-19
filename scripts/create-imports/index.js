import readDeepDir from '../../src/directory/readDeep/index.js';

import writeFile from '../../src/file/write/index.js';

import resolve from '../../src/path/resolve/index.js';
import dirname from '../../src/path/dirname/index.js';
import replace from '../../src/string/replace/index.js';

const __dirname = dirname(import.meta);

const root = resolve(__dirname, '../../src');
const list = await readDeepDir(root);

const files = list
  .map(item => item.replace(root, ''))
  .filter(item => item.endsWith('index.js'))
  .filter(item => item.split(/\\|\//).length === 4);

const modules = files.reduce((result, file) => {
  const [, module, method] = file.split(/\\|\//);

  result[module] = result[module] || [];

  result[module].push(method);

  return result;
}, {});

const stack = Object.keys(modules).map(name => {
  const line = (method) => `export { default as ${method} } from './${method}/index.js';\n`;

  const content = modules[name].map(line).join('');

  return writeFile([root, name, 'index.js'], content);
});

await Promise.all(stack);

console.log('Done!');
