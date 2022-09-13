const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.resolve(__dirname, '../package.json'));

module.exports = JSON.parse(content);
