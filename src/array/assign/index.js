export default function assign(array, getter, accumulator = {}) {
  return array.reduce((result, item, i) => {
    const adds = getter(item, i);

    adds && Object.assign(result, adds);

    return result;
  }, accumulator);
};
