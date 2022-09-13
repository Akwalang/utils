import iterator from '.';

test('Regexp.iterator', () => {
  const reg = /\{(.+?)\}/g;
  const string = '{insert1} Example {insert2} text {insert3} for {insert4} test {insert5} matches {insert6}';

  const results = [
    ['{insert1}', 'insert1'],
    ['{insert2}', 'insert2'],
    ['{insert3}', 'insert3'],
    ['{insert4}', 'insert4'],
    ['{insert5}', 'insert5'],
    ['{insert6}', 'insert6'],
  ];

  for (const match of iterator(reg, string)) {
    expect([...match]).toEqual(results.shift());
  }
});
