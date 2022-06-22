declare function jsonParse<T, V>(value: V): T | V;
declare function jsonParse<T, V, F>(value: V, fallback?: F): T | V | F;

export default jsonParse;
