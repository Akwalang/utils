import isDate from '../../is/date/index.js';
import isObject from '../../is/object/index.js';
import isPlainObject from '../../is/plainObject/index.js';

const _hasOwnProperty = Object.prototype.hasOwnProperty;

const TYPES = [Number, String, Boolean];

export default function clone(entity) {
  if (!entity) return entity; // null, undefined, NaN values check

  // normalizing primitives if someone did new String('aaa'), or new Number('444');
  for (let i = 0, len = TYPES.length; i < len; i++) {
    if (entity instanceof TYPES[i]) return TYPES[i](entity);
  }

  if (Array.isArray(entity)) return entity.map(value => clone(value));

  // if (isNode(entity)) return entity.cloneNode(true);

  if (isDate(entity)) return new Date(+entity);

  if (isPlainObject(entity)) {
    const result = {};

    for (let name in entity) {
      if (!_hasOwnProperty.call(entity, name)) continue;

      result[name] = clone(entity[name]);
    }

    return result;
  }

  return entity;
}
