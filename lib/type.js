import { getGlobalObject } from './_utils';

const globalObject = getGlobalObject();
/**
 * @namespace type
 */

/**
 * Return a true when arguments is string type
 * @param {*} v
 * @memberof type
 * @example
 * isString('test');
 */
export function isString(v) {
  return typeof v === 'string';
}

/**
 * Return a true when arguments is number type
 * @param {*} v
 * @memberof type
 * @example
 * isNumber(1);
 */
export function isNumber(v) {
  return typeof v === 'number';
}

/**
 * Return a true when arguments is boolean type
 * @param {*} v
 * @memberof type
 * @example
 * isBoolean(true);
 */
export function isBoolean(v) {
  return typeof v === 'boolean';
}

/**
 * Return a true when arguments is undefined type
 * @param {*} v
 * @memberof type
 * @example
 * isUndefined(undefined);
 */
export function isUndefined(v) {
  return v === undefined;
}

/**
 * Return a true when arguments is null type
 * @param {*} v
 * @memberof type
 * @example
 * isNull(null);
 */
export function isNull(v) {
  return v === null;
}

/**
 * Return a true when arguments is symbol type
 * @param {*} v
 * @memberof type
 * @example
 * isSymbol(Symbol(1));
 */
export function isSymbol(v) {
  return typeof v === 'symbol';
}

/**
 * Return a true when arguments is bigint type
 * @param {*} v
 * @memberof type
 * @example
 * isBigInt(10n);
 */
export function isBigInt(v) {
  return typeof v === 'bigint';
}

/**
 * Return a true when arguments is plain object type
 * @param {*} v
 * @memberof type
 * @example
 * isPlainObject({});
 */
export function isPlainObject(v) {
  return v?.constructor === Object;
}

/**
 * Return a true when arguments is function type
 * @param {*} v
 * @memberof type
 * @example
 * isFunction(function(){});
 */
export function isFunction(v) {
  return typeof v === 'function';
}

/**
 * Return a true when arguments is array type
 * @param {*} v
 * @memberof type
 * @example
 * isArray([]);
 */
export function isArray(v) {
  return Array.isArray(v);
}

/**
 * Return a true when arguments is regexp type
 * @param {*} v
 * @memberof type
 * @example
 * isRegExp(new RegExp('\s+'));
 */
export function isRegExp(v) {
  return v instanceof RegExp;
}

/**
 * Return a true when arguments is element type
 * @param {*} v
 * @memberof type
 * @example
 * isElement(document.documentElement);
 */
export function isElement(v) {
  if (!(isFunction(globalObject.HTMLElement) || isPlainObject(globalObject.HTMLElement))) {
    return false;
  }
  return v instanceof HTMLElement;
}

/**
 * Return a true when arguments is date type
 * @param {*} v
 * @memberof type
 * @example
 * isDate(new Date());
 */
export function isDate(v) {
  return v instanceof Date;
}

/**
 * Return a true when arguments is array like object type
 * @param {*} v
 * @memberof type
 * @example
 * isArrayLikeObject([]);
 */
export function isArrayLikeObject(v) {
  return !isEmpty(v?.length) || isMap(v) || isSet(v);
}

/**
 * Return a true when arguments is iterator type
 * @param {*} v
 * @memberof type
 * @example
 * isIterableObject([]);
 */
export function isIterableObject(v) {
  if (!isFunction(globalObject.Symbol)) {
    return false;
  }
  return typeof v?.[Symbol.iterator] === 'function';
}

/**
 * Return a true when arguments is Map object type
 * @param {*} v
 * @memberof type
 * @example
 * isMap(new Map());
 */
export function isMap(v) {
  if (!isFunction(globalObject.Map)) {
    return false;
  }
  return v instanceof Map;
}

/**
 * Return a true when arguments is Set object type
 * @param {*} v
 * @memberof type
 * @example
 * isSet(new Set());
 */
export function isSet(v) {
  if (!isFunction(globalObject.Set)) {
    return false;
  }
  return v instanceof Set;
}

/**
 * Return a true when arguments is WeakMap object type
 * @param {*} v
 * @memberof type
 * @example
 * isWeakMap(new WeakMap());
 */
export function isWeakMap(v) {
  if (!isFunction(globalObject.WeakMap)) {
    return false;
  }
  return v instanceof WeakMap;
}

/**
 * Return a true when arguments is WeakSet object type
 * @param {*} v
 * @memberof type
 * @example
 * isWeakSet(new WeakSet());
 */
export function isWeakSet(v) {
  if (!isFunction(globalObject.WeakSet)) {
    return false;
  }
  return v instanceof WeakSet;
}

/**
 * Return a true when arguments is primitive type
 * @param {*} v
 * @memberof type
 * @example
 * isPrimitive('test');
 */
export function isPrimitive(v) {
  return isString(v) || isNumber(v) || isBoolean(v) || isUndefined(v) || isNull(v) || isSymbol(v) || isBigInt(v);
}

/**
 * Return a true when arguments is empty
 * @param {*} v
 * @memberof type
 * @example
 * isEmpty(1);
 */
export function isEmpty(v) {
  if (isNumber(v) || isBoolean(v) || isSymbol(v) || isBigInt(v)) return false;

  for (const k in v) {
    if (Object.prototype.hasOwnProperty.call(v, k)) {
      return false;
    }
  }
  return true;
}
