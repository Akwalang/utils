function jsonParse<T>(value: string | undefined): string | T;
function jsonParse<T, F>(value: string | undefined, fallback: F): string | undefined | T | F;
function jsonParse<T, F>(value: string | undefined, fallback?: F): string | undefined | T | F {
  try {
    return JSON.parse(value!);
  } catch (e) {
    return arguments.length >= 2 ? fallback as F : value;
  }
}

export { jsonParse as jsonParse };
