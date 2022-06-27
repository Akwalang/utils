declare function matchRange<T, F = [null, null]>(array: T[], fallback?: F, getValue?: (item: T) => number): [number, number] | F;

export default matchRange;
