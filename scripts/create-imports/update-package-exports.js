const readFile = require('../../dist/file/read/index.js');
const writeFile = require('../../dist/file/write/index.js');

const readDeepDir = require('../../dist/directory/readDeep/index.js');
const createSorter = require('../../dist/array/createSorter/index.js');

module.exports = async function updatePackageExports(root, dist) {
  const list = await readDeepDir(dist);

  let content = await readFile([root, 'package.json']);

  const sorter = createSorter((item) => item.replace('/index.js', ''));

  const files = list
    .map(item => item.replace(root, '.').replace(/\\|\//g, '/'))
    .filter(item => item.endsWith('index.js'))
    .sort(sorter);

  const exports = [...files].map((file) => {
    const name = file
      .replace('/dist', '')
      .replace('.js', '')
      .replace('/index', '');

    return `    "${name}": "${file}",`;
  }).join('\n').slice(0, -1);

  content = content.replace(/"exports": \{[\s\S]+?\}/, `"exports": {\n${exports}\n  }`);

  return writeFile([root, 'package.json'], content);
}
