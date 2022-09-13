const resolve = require('../../dist/path/resolve/index.js');

const createModuleImports = require('./create-module-imports.js');
const updatePackageExports = require('./update-package-exports.js');

const root = resolve(__dirname, '../..');
const src = resolve(root, 'src');

(async () => {
  await createModuleImports(src, src);
  await updatePackageExports(root, src);

  console.log('Done!');
})();
