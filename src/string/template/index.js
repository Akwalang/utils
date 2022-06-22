import getter from '../../object/getter/index.js';

const reg = /<%=\s*([\w\-.\[\]]+)\s*%>/ig;

export default function template(str, params = {}) {
  return str.replace(reg, (m, $1) => {
    const value = getter(params, $1);

    return value !== undefined ? value : m;
  });
};
