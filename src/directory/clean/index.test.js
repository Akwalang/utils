import clean from './index.js';

import read from '../read/index.js';
import create from '../create/index.js';
import remove from '../remove/index.js';

test('Directory.clean', async () => {
  await create(__dirname, 'qwerty', 'asd', '123');
  await clean(__dirname, 'qwerty');

  const children = await read(__dirname, 'qwerty');

  expect(children.length).toBe(0);

  await remove(__dirname, 'qwerty');
});
