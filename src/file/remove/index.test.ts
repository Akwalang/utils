import write from '../write';
import remove from '.';

import stat from '../../path/stat';

test('File.remove: remove file', async () => {
  await write([__dirname, 'test-file.txt'], 'Some test text');

  const stt_1 = await stat(__dirname, 'test-file.txt');

  expect(stt_1 && stt_1.isFile()).toBe(true);

  await remove(__dirname, 'test-file.txt');

  const stt_2 = await stat(__dirname, 'test-file.txt');

  expect(stt_2).toBe(null);
});
