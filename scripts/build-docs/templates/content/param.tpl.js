export default function tplParam(content) {
  let md = `**Params:**\n\n`;

  md += content.items.map(item => {
    let res = `* **${item.name}**: ${item.type} `;

    if (item.defaultValue) {
      res += `_[default: ${item.defaultValue}]_ `;
    }

    res += `- ${item.description}`;

    return res;
  }).join('\n');

  md += '\n';

  return md;
};
