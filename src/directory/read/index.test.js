import read from './index.js';

test('Directory.read: read directory', async () => {
  const files = await read(__dirname);

  expect(files).toEqual(['index.d.ts', 'index.js', 'index.test.js']);
});

test('Directory.read: read file', async () => {
  const files = await read(__dirname, 'index.d.ts');

  expect(files).toEqual([]);
});
