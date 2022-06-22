import args from './index.js';

test('Process.args', () => {
  const result = args([
    '',
    '',
    '-param1=value',
    '--param2',
    'param3=10',
    'param4=[true,false,true]',
    'param5=false'
  ]);

  expect(result).toEqual({
    param1: 'value',
    param2: true,
    param3: 10,
    param4: [true, false, true],
    param5: false,
  });
});
