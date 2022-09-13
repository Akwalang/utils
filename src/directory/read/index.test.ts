import read from '.';

test('Directory.read: read directory', async () => {
  const files = await read(__dirname);

  expect(files).toEqual(['index.test.ts', 'index.ts', 'readme.doc.js']);
});

test('Directory.read: read file', async () => {
  const files = await read(__dirname, 'index.d.ts');

  expect(files).toEqual([]);
});
