import readDeepDir from '../../src/directory/readDeep/index.js';

import resolve from '../../src/path/resolve/index.js';
import dirname from '../../src/path/dirname/index.js';

import createModuleImports from './create-module-imports.js';
import updatePackageExports from './update-package-exports.js';

const __dirname = dirname(import.meta);

const root = resolve(__dirname, '../..');
const src = resolve(root, 'src');

const list = await readDeepDir(src);

await createModuleImports(src, list);
await updatePackageExports(root, list);

console.log('Done!');
