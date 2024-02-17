import { clean } from '.';

import { read } from '../read';
import { create } from '../create';
import { remove } from '../remove';

test('Directory.clean', async () => {
  await create(__dirname, 'qwerty', 'asd', '123');
  await clean(__dirname, 'qwerty');

  const children = await read(__dirname, 'qwerty');

  expect(children.length).toBe(0);

  await remove([__dirname, 'qwerty']);
});
