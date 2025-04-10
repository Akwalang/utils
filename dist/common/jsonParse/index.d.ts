declare function jsonParse<T>(value: string | undefined): string | T;
declare function jsonParse<T, F>(value: string | undefined, fallback: F): string | undefined | T | F;
export { jsonParse };
