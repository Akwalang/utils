import tplContent from '../content/index.js';

export default function tplParams(section) {
  let md = `#### ${section.title.replace(/\[,/g, ' _[,').replace(/\]\)/g, ']_)')}\n\n`;

  md += section.content.map(tplContent).join('\n');

  return md;
};
