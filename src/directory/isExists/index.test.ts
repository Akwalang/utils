import isExists from '.';

test('Directory.isExists: existing directory', async () => {
  const exists = await isExists(__dirname);

  expect(exists).toBe(true);
});

test('Directory.isExists: missing directory', async () => {
  const exists = await isExists(__dirname, 'missing');

  expect(exists).toBe(false);
});

test('Directory.isExists: existing file', async () => {
  const exists = await isExists(__dirname, 'index.js');

  expect(exists).toBe(false);
});
