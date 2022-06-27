import tplParam from '../content/param.tpl.js';
import tplReturn from '../content/return.tpl.js';
import tplScript from '../content/script.tpl.js';

import types from '../../types.js';

export default function content(item) {
  switch (item.type) {
    case types.CONTENT_PARAMS: return tplParam(item);
    case types.CONTENT_RETURN: return tplReturn(item);
    case types.CONTENT_SCRIPT: return tplScript(item);
  }

  return '';
};
