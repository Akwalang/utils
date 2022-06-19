import readDeep from './index.js';

import resolve from '../../path/resolve/index.js';

test('Directory.readDeep', async () => {
  const files = await readDeep(__dirname);

  expect(files).toEqual([
    resolve(__dirname, 'index.d.ts'),
    resolve(__dirname, 'index.js'),
    resolve(__dirname, 'index.test.js'),
  ]);
});
