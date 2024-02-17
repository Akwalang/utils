type Getter<T, R> = (item: T, i: number) => undefined | null | R;

export const assign = function assign<T, R extends {}>(array: T[], getter: Getter<T, R>, accumulator?: R): R {
  return array.reduce<R>((result, item, i) => {
    const adds = getter(item, i);

    adds && Object.assign(result, adds);

    return result;
  }, accumulator || {} as R);
};
