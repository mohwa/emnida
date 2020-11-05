import { getGlobalObject } from './_utils';

const globalObject = getGlobalObject();

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

export function isSymbol(v) {
  return typeof v === 'symbol';
}

export function isBigInt(v) {
  return typeof v === 'bigint';
}

export function isPlainObject(v) {
  return v?.constructor === Object;
}

export function isFunction(v) {
  return typeof v === 'function';
}

export function isArray(v) {
  return Array.isArray(v);
}

export function isRegExp(v) {
  return v instanceof RegExp;
}

export function isElement(v) {
  if (!isFunction(globalObject.HTMLElement)) {
    return false;
  }
  return v instanceof HTMLElement;
}

export function isDate(v) {
  return v instanceof Date;
}

export function isArrayLikeObject(v) {
  return !isEmpty(v?.length) || isMap(v) || isSet(v);
}

export function isIterableObject(v) {
  if (!isFunction(globalObject.Symbol)) {
    return false;
  }
  return typeof v?.[Symbol.iterator] === 'function';
}

export function isMap(v) {
  if (!isFunction(globalObject.Map)) {
    return false;
  }
  return v instanceof Map;
}

export function isSet(v) {
  if (!isFunction(globalObject.Set)) {
    return false;
  }
  return v instanceof Set;
}

export function isWeakMap(v) {
  if (!isFunction(globalObject.WeakMap)) {
    return false;
  }
  return v instanceof WeakMap;
}

export function isWeakSet(v) {
  if (!isFunction(globalObject.WeakSet)) {
    return false;
  }
  return v instanceof WeakSet;
}

export function isPrimitive(v) {
  return isString(v) || isNumber(v) || isBoolean(v) || isUndefined(v) || isNull(v) || isSymbol(v) || isBigInt(v);
}

export function isEmpty(v) {
  if (isNumber(v) || isBoolean(v) || isSymbol(v) || isBigInt(v)) return false;

  for (const k in v) {
    if (Object.prototype.hasOwnProperty.call(v, k)) {
      return false;
    }
  }
  return true;
}
