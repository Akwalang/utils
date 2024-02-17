import { dirname } from '.';

test('Path.dirname', () => {
  const file = 'file:///' + __filename.split('\\').join('/');
  const dir = dirname({ url: file });

  const folder = dir.split(/\\|\//).slice(-1)[0];

  expect(folder).toBe('dirname');
});
