import read from './index.js';

test('Directory.readDeep', async () => {
  const files = await read(__dirname);

  expect(files).toEqual(['index.d.ts', 'index.js', 'index.test.js']);
});
