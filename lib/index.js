export function isString(v) {
  return typeof v === 'string';
}

export function isNumber(v) {
  return typeof v === 'number';
}

export function isBoolean(v) {
  return typeof v === 'boolean';
}

export function isUndefined(v) {
  return v === undefined;
}

export function isNull(v) {
  return v === null;
}

export function isPlainObject(v) {
  return v && v.constructor === Object;
}

export function isFunction(v) {
  return typeof v === 'function';
}

export function isArray(v) {
  return Array.isArray(v);
}

export function isElement(v) {
  return v instanceof HTMLElement;
}

export function isArrayLikeObject(v) {
  return !isEmpty(v?.length);
}

export function isIterableObject(v) {
  return typeof v[Symbol.iterator] === 'function';
}

export function isEmpty(v) {
  if (isNumber(v) || isBoolean(v)) return false;

  for (const k in v) {
    if (Object.prototype.hasOwnProperty.call(v, k)) return false;
  }
  return true;
}
