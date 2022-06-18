import parse from './index.js';

test('Common.parse: valid', () => {
  const parsed = parse('{"name":123}');

  expect(parsed).toEqual({ name: 123 });
});

test('Common.parse: invalid', () => {
  const parsed = parse('qwerty');

  expect(parsed).toEqual('qwerty');
});
