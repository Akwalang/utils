const tplParam = require('../content/param.tpl.js');
const tplReturn = require('../content/return.tpl.js');
const tplScript = require('../content/script.tpl.js');
const tplParagraph = require('../content/paragraph.tpl.js');

const types = require('../../types.js');

module.exports = function content(item) {
  switch (item.type) {
    case types.CONTENT_PARAMS: return tplParam(item);
    case types.CONTENT_RETURN: return tplReturn(item);
    case types.CONTENT_SCRIPT: return tplScript(item);
    case types.CONTENT_PARAGRAPH: return tplParagraph(item);
  }

  return '';
};
