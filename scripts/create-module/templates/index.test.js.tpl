import <%= module.method %> from './index.js';

test('<%= module.name %>.<%= module.method %>', () => {
  const result = <%= module.method %>();

  expect(result).toBe();
  expect(result).toEqual();
});
