import resolve from '../../src/path/resolve/index.js';
import dirname from '../../src/path/dirname/index.js';

import createModuleImports from './create-module-imports.js';
import updatePackageExports from './update-package-exports.js';

const __dirname = dirname(import.meta);

const root = resolve(__dirname, '../..');
const src = resolve(root, 'src');

await createModuleImports(src, src);
await updatePackageExports(root, src);

console.log('Done!');
