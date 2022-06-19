import writeFile from '../../src/file/write/index.js';

export default async function createModuleImports(root, list) {
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

  return Promise.all(stack);
}
