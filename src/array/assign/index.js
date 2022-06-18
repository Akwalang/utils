export default function assign(array, getter) {
  return array.reduce((result, item, i) => {
    const adds = getter(item, i);

    adds && Object.assign(result, adds);

    return result;
  }, {});
};
