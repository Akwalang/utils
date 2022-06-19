import isExists from './index.js';

test('File.isExists: existing file', async () => {
  const exists = await isExists(__dirname, 'index.js');

  expect(exists).toBe(true);
});

test('File.isExists: missing file', async () => {
  const exists = await isExists(__dirname, 'missing.js');

  expect(exists).toBe(false);
});

test('File.isExists: existing directory', async () => {
  const exists = await isExists(__dirname);

  expect(exists).toBe(false);
});
