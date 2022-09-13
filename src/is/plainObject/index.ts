export default function isPlainObject(value: any): value is Record<any, any> {
  return !!value && value.constructor === Object;
}
