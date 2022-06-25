import resolve from '../../src/path/resolve/index.js';
import dirname from '../../src/path/dirname/index.js';

import main from './templates/main.tpl.js';

import pkg from '../package.js';
import meta from '../meta.js';
import types from './types.js';

const build = async (provider) => {
  const data = provider(pkg, meta, types);

  return main(data);
};

export default build;
