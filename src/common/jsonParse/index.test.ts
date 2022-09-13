import jsonParse from '.';

test('Common.jsonParse: valid', () => {
  const parsed = jsonParse('{"name":123}');

  expect(parsed).toEqual({ name: 123 });
});

test('Common.jsonParse: invalid', () => {
  const parsed = jsonParse('qwerty');

  expect(parsed).toEqual('qwerty');
});

test('Common.jsonParse: invalid with fallback', () => {
  const parsed = jsonParse('qwerty', false);

  expect(parsed).toEqual(false);
});

test('Common.jsonParse: invalid with fallback as undefined', () => {
  const parsed = jsonParse('qwerty', undefined);

  expect(parsed).toEqual(undefined);
});
