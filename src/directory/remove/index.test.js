import remove from './index.js';
import create from '../create/index.js';

import stat from '../../path/stat/index.js';

test('Directory.remove', async () => {
  await create([__dirname, 'qwerty', 'asd', '123']);
  await remove([__dirname, 'qwerty']);

  const stt = await stat([__dirname, 'qwerty']);

  expect(stt).toBe(null);
});
