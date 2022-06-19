import replace from './index.js';

test('String.replace: top level', () => {
  const result = replace(
    'test <%= 123 %> text <%= name %>! <%= missing %>',
    { '123': 'number', name: 'string' }
  );

  expect(result).toEqual('test number text string! <%= missing %>');
});

test('String.replace: nested level', () => {
  const result = replace(
    'test <%= nest.123 %> text <%= nest.name %>! <%= nest.missing %>',
    {
      nest: { '123': 'number', name: 'string' },
    }
  );

  expect(result).toEqual('test number text string! <%= nest.missing %>');
});
