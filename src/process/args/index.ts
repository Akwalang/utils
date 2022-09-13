import jsonParse from '../../common/jsonParse';

const reg = /-{0,2}([^=\s]+)=?\s*(.*)/;

// process.argv

export = function args(args: string[]): Record<any, any> {
  const result: Record<any, any> = {};

  for (let i = 2, len = args.length; i < len; i++) {
    const [, name, value] = args[i].match(reg) || [];

    result[name] = value ? jsonParse(value) : true;
  }

  return result;
}
