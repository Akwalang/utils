import dirname from '../src/path/dirname/index.js';
import readFile from '../src/file/read/index.js';

const __dirname = dirname(import.meta);

const content = await readFile(__dirname, '../package.json');

export default JSON.parse(content);
