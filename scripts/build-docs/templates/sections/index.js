import tplDescription from './description.tpl.js';
import tplExample from './example.tpl.js';
import tplImport from './import.tpl.js';
import tplResult from './result.tpl.js';

import types from '../../types.js';

export default function content(item) {
  switch (item.type) {
    case types.SECTION_DESCRIPTION: return tplDescription(item);
    case types.SECTION_EXAMPLE: return tplExample(item);
    case types.SECTION_IMPORT: return tplImport(item);
    case types.SECTION_RESULT: return tplResult(item);
  }

  return '';
};
