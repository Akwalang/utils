import read from '../read';
import write from '.';

import remove from '../../directory/remove';

test('File.write', async () => {
  const target = [__dirname, 'test-dir-1', 'test-dir-2', 'test-file.txt'];
  const data = JSON.stringify([1, 2, 3, 4]);

  await write(target, data);

  const written = await read(target);

  expect(written).toBe(data);

  await remove([__dirname, 'test-dir-1']);
});
