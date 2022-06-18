export default function idGenerator(prefix, postfix) {
  let id = 0;

  prefix = prefix || '';
  postfix = postfix || '';

  return () => ++id && (prefix || postfix) ? [prefix, id, postfix].join('') : id;
};
