import matchAll from './index.js';

test('Regexp.matchAll', () => {
  const reg = /\{(.+?)\}/g;
  const string = '{insert1} Example {insert2} text {insert3} for {insert4} test {insert5} matches {insert6}';

  let result = matchAll(reg, string);

  result = result.map(item => ([...item]));

  expect(result).toEqual([
    ['{insert1}', 'insert1'],
    ['{insert2}', 'insert2'],
    ['{insert3}', 'insert3'],
    ['{insert4}', 'insert4'],
    ['{insert5}', 'insert5'],
    ['{insert6}', 'insert6'],
  ]);
});
