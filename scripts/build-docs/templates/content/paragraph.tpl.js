export default function tplParagraph(content) {
  let md = ``;

  md += content.items.map(item => item.text).join('\n\n');

  if (content.items.length > 1) {
    md += '\n';
  }

  return md;
};
