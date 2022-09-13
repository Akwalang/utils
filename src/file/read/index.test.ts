import read from '.';
import write from '../write';
import remove from '../remove';

test('File.write', async () => {
  const target = [__dirname, 'test-file.txt'];
  const data = 'Test string';

  await write(target, data);

  const written = await read(target);

  expect(written).toBe(data);

  await remove(target);
});
