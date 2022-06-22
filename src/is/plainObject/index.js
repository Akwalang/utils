export default function isPlainObject(value) {
  return !!value && value.constructor === Object;
}
