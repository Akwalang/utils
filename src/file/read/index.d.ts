type Options = {
  encoding: string | null,
  flag: 'a' | 'ax' | 'a+' | 'ax+' | 'as' | 'as+' | 'r' | 'r+' | 'rs+' | 'w' | 'wx' | 'w+' | 'wx+',
};

declare function read(
  path: string | string[],
  options: Options
): Promise<string>;

export default read;
