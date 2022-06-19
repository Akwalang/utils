import read from '../read/index.js';
import write from './index.js';
import remove from '../remove/index.js';

test('File.write', async () => {
  const target = [__dirname, 'test-file.txt'];
  const data = [1, 2, 3, 4];

  await write(target, data);

  const written = await read(target);

  expect(written).toBe(JSON.stringify(data));

  await remove(target);
});
