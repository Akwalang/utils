import deferred from './index.js';

test('Common.deferred: resolve', async () => {
  const defer = deferred();

  const success = jest.fn();
  const fail = jest.fn();

  defer
    .then(() => success())
    .catch(() => fail());

  defer.resolve();

  await defer;

  expect(success).toHaveBeenCalled();
  expect(fail).not.toHaveBeenCalled();
});

test('Common.deferred: reject', async () => {
  const defer = deferred();

  const success = jest.fn();
  const fail = jest.fn();

  defer
    .then(() => success())
    .catch(() => fail());

  try {
    defer.reject();
  } catch (e) {}

  await new Promise(resolve => setTimeout(resolve, 10));

  expect(success).not.toHaveBeenCalled();
  expect(fail).toHaveBeenCalled();
});
