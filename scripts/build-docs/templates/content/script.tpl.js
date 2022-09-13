const types = require('../../types.js');

module.exports = function tplScript(content) {
  const type = {
    [types.SCRIPT_JS]: 'javascript',
    [types.SCRIPT_JSON]: 'json',
  }[content.script.type] || '';

  let script = content.script.content.replace(/^\s*\n|[\n\s]+$/g, '');

  const displace = (/^(\s*)/.exec(script) || [, null])[1];

  if (displace) {
    script = script
      .split('\n')
      .map(line => line.replace(displace, ''))
      .join('\n');
  }

  return '```' + type + '\n' + script + '\n```';
};
