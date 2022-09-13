import stat from '.';

test('Path.stat: directory', async () => {
  const data = await stat(__dirname);

  expect(data).not.toBe(null);

  if (data) {
    expect(data.isDirectory()).toBe(true);
    expect(data.isFile()).toBe(false);
  }
});

test('Path.stat: file', async () => {
  const data = await stat(__dirname, 'index.ts');

  expect(data).not.toBe(null);

  if (data) {
    expect(data.isDirectory()).toBe(false);
    expect(data.isFile()).toBe(true);
  }
});

test('Path.stat: missing', async () => {
  const data = await stat(__dirname, 'missing');

  expect(data).toBe(null);
});
