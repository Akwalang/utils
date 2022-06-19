import read from './index.js';
import write from '../write/index.js';
import remove from '../remove/index.js';

test('File.write', async () => {
  const target = [__dirname, 'test-file.txt'];
  const data = 'Test string';

  await write(target, data);

  const written = await read(target);

  expect(written).toBe(data);

  await remove(target);
});
