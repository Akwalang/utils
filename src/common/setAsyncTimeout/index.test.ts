import { setAsyncTimeout } from '.';

test('Common.setAsyncTimeout', async () => {
  const time = +new Date();

  await setAsyncTimeout(200);

  const spent = +new Date() - time;

  expect(spent).toBeGreaterThanOrEqual(200);
});
