import getStack from '../../process/getStack/index.js';

import dirname from '../../path/dirname/index.js';
import filename from '../../path/filename/index.js';

import writeFile from '../../file/write/index.js';

export default function write(data, name) {
  const url = getStack(1, 2)[0].file;

  const dir = dirname({ url });
  const file = filename({ url });

  name = name || file.replace(/(\.jsx?|\.tsx?)$/, '');

  const target = `${name}.__debug__.json`;

  return writeFile([dir, target], JSON.stringify(data, null, '  '));
}
