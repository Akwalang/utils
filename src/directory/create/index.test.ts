import { create } from '.';
import { remove } from '../remove';

import { stat } from '../../path/stat';

test('Directory.create', async () => {
  await create(__dirname, 'qwerty', 'asd', '123');

  const stt = await stat(__dirname, 'qwerty', 'asd', '123');

  expect(!!stt && stt.isDirectory()).toBe(true);

  await remove([__dirname, 'qwerty']);
});
