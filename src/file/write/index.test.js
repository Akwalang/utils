import read from '../read/index.js';
import write from './index.js';

import remove from '../../directory/remove/index.js';

test('File.write', async () => {
  const target = [__dirname, 'test-dir-1', 'test-dir-2', 'test-file.txt'];
  const data = [1, 2, 3, 4];

  await write(target, data);

  const written = await read(target);

  expect(written).toBe(JSON.stringify(data));

  await remove([__dirname, 'test-dir-1']);
});
