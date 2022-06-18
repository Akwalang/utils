type Direction = 'asc' | 'desc';

type Directions = Direction | Direction[];

type Field = string;
type Getter = (item: {}) => string | number;

type KeysList = Field | Getter | (Field | Getter)[];

type Comparator = (a: any, b: any) => -1 | 0 | 1;

declare function createSorter(keys?: null, dirs?: Directions): Comparator;
declare function createSorter(keys?: KeysList, dirs?: Directions): Comparator;

export default createSorter;
