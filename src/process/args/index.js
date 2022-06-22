import jsonParse from '../../common/jsonParse/index.js';

const reg = /-{0,2}([^=\s]+)=?\s*(.*)/;

export default function args(args = process.argv) {
  const result = {};

  for (let i = 2, len = args.length; i < len; i++) {
    let [, name, value] = args[i].match(reg);

    result[name] = value ? jsonParse(value) : true;
  }

  return result;
};
