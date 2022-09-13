const tplDescription = require('./description.tpl.js');
const tplParagraph = require('./paragraph.tpl.js');
const tplExample = require('./example.tpl.js');
const tplImport = require('./import.tpl.js');
const tplResult = require('./result.tpl.js');
const tplUsage = require('./usage.tpl.js');

const types = require('../../types.js');

module.exports = function content(item, sections) {
  switch (item.type) {
    case types.SECTION_DESCRIPTION: return tplDescription(item, sections);
    case types.SECTION_PARAGRAPH: return tplParagraph(item, sections);
    case types.SECTION_EXAMPLE: return tplExample(item, sections);
    case types.SECTION_USAGE: return tplUsage(item, sections);
    case types.SECTION_IMPORT: return tplImport(item, sections);
    case types.SECTION_RESULT: return tplResult(item, sections);
  }

  return '';
};
