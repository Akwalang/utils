export const isNil = function isNil(value: any): value is undefined | null {
  return value == null;
};
