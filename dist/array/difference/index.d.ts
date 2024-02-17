import { type Comparator } from '../utils';
declare type Getter<T> = (item: T) => any;
declare function difference<T>(a: T[], b: T[], worker?: Getter<T>): T[];
declare function difference<T>(a: T[], b: T[], worker?: Comparator<T>): T[];
export { difference as difference };
