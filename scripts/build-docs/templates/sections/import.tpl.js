import tplContent from '../content/index.js';

export default function tplImport(section) {
  let md = `#### ${section.title}\n\n`;

  md += section.content.map(tplContent).join('\n');

  return md;
};
