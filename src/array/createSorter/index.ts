import isArray from '../../is/array';
import isString from '../../is/string';
import isFunction from '../../is/function';

import getter from '../../object/getter';

type AnyRecord = Record<any, any>;

type Direction = 'asc' | 'desc';
type Multiplier = -1 | 1;

type CompareResult = -1 | 0 | 1;

type Directions = string | Direction | Direction[];

type Field = string;
type Getter<T> = (item: T) => string | number;

type KeysList<T> = Field | Getter<T> | (Field | Getter<T>)[];

type Comparator = (a: any, b: any) => CompareResult;

const SORTER_COMPARATOR = (a: any, b: any, m: Multiplier): CompareResult => {
  if (a > b) return  1 * m as CompareResult;
  if (a < b) return -1 * m as CompareResult;

  return 0;
};

const createGetter = <T extends AnyRecord>(field: string): Getter<T> =>
  field.includes('.') || field.includes('[')
    ? (item: T) => getter(item, field)
    : (item: T) => item[field];

const isDir = (value: string): value is Direction => value === 'asc' || value === 'desc';

const sliceDirections = (dirs: string): Direction[] => {
  const items = dirs.split(',').map(item => item.trim());

  return items.map(dir => isDir(dir) ? dir : 'asc');
};

const direction2multiplier = (dir: Direction): Multiplier => {
  if (dir === 'asc') return 1;
  if (dir === 'desc') return -1;

  return 1;
};

function createSorter<T extends AnyRecord>(keys: null | KeysList<T> = null, dirs: Directions = 'asc'): Comparator {
  const dirsList = isArray(dirs) ? dirs : sliceDirections(dirs);

  const multipliers: Multiplier[] = dirsList.map(direction2multiplier);

  if (keys === null) {
    return (a, b) => SORTER_COMPARATOR(a, b, multipliers[0]);
  }

  let fields: Getter<T>[] = [];

  if (isFunction(keys)) fields = [keys];

  if (isString(keys)) {
    const items = keys.split(',').map(f => f.trim());

    fields = items.map(createGetter);
  }

  if (isArray(keys)) {
    fields = keys.map(field => {
      if (isString(field)) return createGetter(field);
      if (isFunction(field)) return field;

      return () => 0;
    });
  }

  return (a: T, b: T) => {
    let result: CompareResult = 0;

    for (let field, i = 0; (field = fields[i]); i++) {
      result = SORTER_COMPARATOR(field(a), field(b), multipliers[i] || multipliers[0]);

      if (result) break;
    }

    return result;
  };
}

export default createSorter;
