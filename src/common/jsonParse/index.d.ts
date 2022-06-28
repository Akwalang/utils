declare function jsonParse<T>(value: string): T | string;
declare function jsonParse<T, F>(value: string, fallback?: F): T | string | F;

export default jsonParse;
