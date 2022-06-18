type Getter = (item: any) => any;
type Comparator = (a: any, b: any) => boolean;

declare function difference<T>(a: T[], b: T[], Getter): T[];
declare function difference<T>(a: T[], b: T[], Comparator): T[];

export default difference;
