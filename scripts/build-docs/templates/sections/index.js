import tplDescription from './description.tpl.js';
import tplExample from './example.tpl.js';
import tplImport from './import.tpl.js';
import tplResult from './result.tpl.js';
import tplUsage from './usage.tpl.js';

import types from '../../types.js';

export default function content(item, sections) {
  switch (item.type) {
    case types.SECTION_DESCRIPTION: return tplDescription(item, sections);
    case types.SECTION_EXAMPLE: return tplExample(item, sections);
    case types.SECTION_USAGE: return tplUsage(item, sections);
    case types.SECTION_IMPORT: return tplImport(item, sections);
    case types.SECTION_RESULT: return tplResult(item, sections);
  }

  return '';
};
