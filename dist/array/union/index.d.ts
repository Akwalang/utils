import { type Comparator } from '../utils';
declare function union<T>(...arrays: T[][]): T[];
declare function union<T>(comparator: Comparator<T>, ...arrays: T[][]): T[];
export { union as union };
