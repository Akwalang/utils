import fs from 'fs/promises';

import resolve from '../../path/resolve';

export default function write(dest, data, options = {}) {
  dest = resolve(dest);
  data = typeof data === 'string' ? data : JSON.stringify(data);

  return fs.writeFile(dest, data, options);
}
