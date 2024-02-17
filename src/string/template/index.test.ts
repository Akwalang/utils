import { template } from '.';

test('String.template: top level', () => {
  const result = template(
    'test <%= 123 %> text <%= name %>! <%= missing %>',
    { '123': 'number', name: 'string' }
  );

  expect(result).toEqual('test number text string! <%= missing %>');
});

test('String.template: nested level', () => {
  const result = template(
    'test <%= nest.123 %> text <%= nest.name %>! <%= nest.missing %>',
    {
      nest: { '123': 'number', name: 'string' },
    }
  );

  expect(result).toEqual('test number text string! <%= nest.missing %>');
});
