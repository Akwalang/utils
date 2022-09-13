import getter from '../../object/getter';

const reg = /<%=\s*([\w\-.[\]]+)\s*%>/ig;

export = function template(str: string, params: {}): string {
  return str.replace(reg, (m, $1) => {
    const value = getter(params, $1);

    return value !== undefined ? value : m;
  });
}
