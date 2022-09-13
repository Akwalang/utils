import getStack from '../../process/getStack';

import dirname from '../../path/dirname';
import filename from '../../path/filename';

import writeFile from '../../file/write';

import isString from '../../is/string';

export = function write(data: any, name?: string): Promise<void> {
  const url = getStack(1, 2)[0].file;

  const dir = dirname({ url });
  const file = filename({ url });

  name = name || file.replace(/(\.jsx?|\.tsx?)$/, '');

  const target = `${name}.__debug__.json`;
  const string = isString(data) ? data : JSON.stringify(data, null, '  ');

  return writeFile([dir, target], string);
}
