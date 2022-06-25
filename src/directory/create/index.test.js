import create from './index.js';
import remove from '../remove/index.js';

import stat from '../../path/stat/index.js';

test('Directory.create', async () => {
  await create(__dirname, 'qwerty', 'asd', '123');

  const stt = await stat(__dirname, 'qwerty', 'asd', '123');

  expect(stt.isDirectory()).toBe(true);

  await remove(__dirname, 'qwerty');
});
