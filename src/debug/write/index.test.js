import write from './index.js';

import isExistsFile from '../../file/isExists/index.js';
import removeFile from '../../file/remove/index.js';

test('Debug.write', async () => {
  await write([1, 2, 3, 4, { test: true }]);

  const exists = await isExistsFile(__dirname, 'index.test.__debug__.json');

  expect(exists).toBe(true);

  await removeFile(__dirname, 'index.test.__debug__.json');
});
