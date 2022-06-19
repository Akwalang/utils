import readFile from '../../src/file/read/index.js';
import writeFile from '../../src/file/write/index.js';

import createSorter from '../../src/array/createSorter/index.js';

export default async function updatePackageExports(root, list) {
  let content = await readFile(root, 'package.json');

  const files = list
    .map(item => item.replace(root, '.').replace(/\\|\//g, '/'))
    .filter(item => item.endsWith('index.js'))
    .sort(createSorter((item) => item.replace('/index.js', '')));

  const mains = [
    './src/client.js',
    './src/server.js',
  ];

  const exports = [...mains, ...files].map((file) => {
    const name = file
      .replace('/src', '')
      .replace('.js', '')
      .replace('/index', '');

    return `    "${name}": "${file}",`;
  }).join('\n').slice(0, -1);

  content = content.replace(/"exports": \{[\s\S]+?\}/, `"exports": {\n${exports}\n  }`);

  return writeFile([root, 'package.json'], content);
}
