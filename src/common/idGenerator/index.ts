type NextId<T> = {
  (): T;
  setMax(top: number): NextId<T>;
};

function idGenerator(): NextId<number>;
function idGenerator(prefix: string, postfix?: string): NextId<string>;
function idGenerator(prefix: null | string, postfix: string): NextId<string>;
function idGenerator(prefix?: null | string, postfix?: string) {
  let id = 0;
  let max = Infinity;

  prefix = prefix || '';
  postfix = postfix || '';

  const next = () => {
    const res = !prefix && !postfix ? id : [prefix, id, postfix].join('');

    id = (id + 1) % (max + 1);

    return res;
  };

  next.setMax = (top: number): typeof next => (max = top, next);

  return next;
}

export = idGenerator;
