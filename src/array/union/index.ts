import { deduplicate } from '../deduplicate';

import { isFunction } from '../../is';

function union<T>(...arrays: T[][]): T[];
function union<T>(getter: (v: T) => any, ...arrays: T[][]): T[];
function union<T>(...args: [((v: T) => any), ...T[][]] | T[][]): T[] {
  const getter = isFunction(args[0]) ? args[0] as (v: T) => any : (v: T) => v;
  const arrays = isFunction(args[0]) ? args.slice(1) as T[][] : args as T[][];

  return deduplicate(arrays.flat(), getter);
}

export { union };
