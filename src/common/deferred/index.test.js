import deferred from './index.js';

test('Common.deferred: resolve', () => {
  const defer = deferred();

  const success = jest.fn();
  const fail = jest.fn();

  defer
    .then(() => success())
    .catch(() => fail());

  defer.resolve();

  setTimeout(() => {
    expect(success).toHaveBeenCalled();
    expect(fail).not.toHaveBeenCalled();
  }, 0)
});

test('Common.deferred: reject', () => {
  const defer = deferred();

  const success = jest.fn();
  const fail = jest.fn();

  defer
    .then(() => success())
    .catch(() => fail());

  defer.resolve();

  setTimeout(() => {
    expect(success).not.toHaveBeenCalled();
    expect(fail).toHaveBeenCalled();
  }, 0)
});
