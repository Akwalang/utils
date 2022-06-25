import param from '../content/param.tpl.js';
import script from '../content/script.tpl.js';

import types from '../../types.js';

export default function content(item) {
  switch (item.type) {
    case types.CONTENT_PARAMS: return param(item);
    case types.CONTENT_SCRIPT: return script(item);
  }

  return '';
};
