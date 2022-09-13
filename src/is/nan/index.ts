export = function isNaN(value: any): value is number {
  return Number.isNaN(value);
}
