const tplContent = require('../content/index.js');

module.exports = function tplExample(section) {
  let md = `#### ${section.title}\n\n`;

  md += section.content.map(tplContent).join('\n');

  return md;
};
