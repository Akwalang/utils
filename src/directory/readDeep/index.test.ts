import readDeep from '.';

import resolve from '../../path/resolve';

test('Directory.readDeep', async () => {
  const files = await readDeep(__dirname);

  expect(files).toEqual([
    resolve(__dirname, 'index.test.ts'),
    resolve(__dirname, 'index.ts'),
    resolve(__dirname, 'mock/deep_file.txt'),
    resolve(__dirname, 'mock'),
    resolve(__dirname, 'readme.doc.js'),
  ]);
});
