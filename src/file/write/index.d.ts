type Data = Parameters<typeof JSON.stringify>[0];

type Options = {
  encoding: string | null,
  mode: number,
  flag: 'a' | 'ax' | 'a+' | 'ax+' | 'as' | 'as+' | 'r' | 'r+' | 'rs+' | 'w' | 'wx' | 'w+' | 'wx+',
};

declare function write(
  dest: string | string[],
  data: Data,
  options: Options
): Promise<undefined>;

export default write;
