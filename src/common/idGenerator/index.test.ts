import idGenerator from '.';

test('Common.idGenerator: default', () => {
  const next = idGenerator();

  expect(next()).toBe(0);
  expect(next()).toBe(1);
  expect(next()).toBe(2);
  expect(next()).toBe(3);
});

test('Common.idGenerator: number max', () => {
  const next = idGenerator().setMax(2);

  expect(next()).toBe(0);
  expect(next()).toBe(1);
  expect(next()).toBe(2);
  expect(next()).toBe(0);
  expect(next()).toBe(1);
  expect(next()).toBe(2);
  expect(next()).toBe(0);
});

test('Common.idGenerator: prefixed', () => {
  const next = idGenerator('pref-');

  expect(next()).toBe('pref-0');
  expect(next()).toBe('pref-1');
  expect(next()).toBe('pref-2');
});

test('Common.idGenerator: postfixed', () => {
  const next = idGenerator(null, '-post');

  expect(next()).toBe('0-post');
  expect(next()).toBe('1-post');
  expect(next()).toBe('2-post');
});

test('Common.idGenerator: prefixed & postfixed', () => {
  const next = idGenerator('pref-', '-post');

  expect(next()).toBe('pref-0-post');
  expect(next()).toBe('pref-1-post');
  expect(next()).toBe('pref-2-post');
});
