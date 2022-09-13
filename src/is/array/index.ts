export = function array<T>(value: any | T[]): value is T[] {
  return Array.isArray(value);
}
