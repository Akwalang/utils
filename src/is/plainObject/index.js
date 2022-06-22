export default function plainObject(value) {
  return !!value && value.constructor === Object;
}
