export default function tplParagraph(content) {
  let md = ``;

  md += content.items.map(item => item.text).join('\n\n');

  return md;
};
