const writeFile = require('../../dist/file/write/index.js').write;
const readDeepDir = require('../../dist/directory/readDeep/index.js').readDeep;

module.exports = async function createModuleImports(root, src) {
  const list = await readDeepDir(src);

  const files = list
    .map(item => item.replace(root, ''))
    .filter(item => item.endsWith('index.ts'))
    .filter(item => item.split(/\\|\//).length === 4);

  const modules = files.reduce((result, file) => {
    const [, module, method] = file.split(/\\|\//);

    result[module] = result[module] || [];

    result[module].push(method);

    return result;
  }, {});

  const stack = Object.keys(modules).map(name => {
    const line = (method) => `export * from './${method}';\n`;

    const content = modules[name].map(line).join('');

    return writeFile([root, name, 'index.ts'], content);
  });

  return Promise.all(stack);
}
