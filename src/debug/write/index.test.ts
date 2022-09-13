import write from '.';

import isExistsFile from '../../file/isExists';
import removeFile from '../../file/remove';

test('Debug.write', async () => {
  await write([1, 2, 3, 4, { test: true }]);

  const exists = await isExistsFile(__dirname, 'index.test.__debug__.json');

  expect(exists).toBe(true);

  await removeFile(__dirname, 'index.test.__debug__.json');
});
