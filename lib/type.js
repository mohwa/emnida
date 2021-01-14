import { getGlobalObject } from './_utils';

const globalObject = getGlobalObject();
/**
 * API will return true or false after evaluate an arguments
 * @namespace type
 */

/**
 * This function evaluate whether arguments is string type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isString('test');
 */
export function isString(v) {
  return typeof v === 'string';
}

/**
 * This function evaluate whether arguments is number type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isNumber(1);
 */
export function isNumber(v) {
  return typeof v === 'number';
}

/**
 * This function evaluate whether arguments is boolean type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isBoolean(true);
 */
export function isBoolean(v) {
  return typeof v === 'boolean';
}

/**
 * This function evaluate whether arguments is undefined type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isUndefined(undefined);
 */
export function isUndefined(v) {
  return v === undefined;
}

/**
 * This function evaluate whether arguments is null type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isNull(null);
 */
export function isNull(v) {
  return v === null;
}

/**
 * This function evaluate whether arguments is symbol type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isSymbol(Symbol(1));
 */
export function isSymbol(v) {
  return typeof v === 'symbol';
}

/**
 * This function evaluate whether arguments is bigint type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isBigInt(10n);
 */
export function isBigInt(v) {
  return typeof v === 'bigint';
}

/**
 * This function evaluate whether arguments is plain object type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isPlainObject({});
 */
export function isPlainObject(v) {
  return v?.constructor === Object;
}

/**
 * This function evaluate whether arguments is function type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isFunction(function(){});
 */
export function isFunction(v) {
  return typeof v === 'function';
}

/**
 * This function evaluate whether arguments is array type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isArray([]);
 */
export function isArray(v) {
  return Array.isArray(v);
}

/**
 * This function evaluate whether arguments is regexp type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isRegExp(new RegExp('\s+'));
 */
export function isRegExp(v) {
  return v instanceof RegExp;
}

/**
 * This function evaluate whether arguments is element type
 * @param {*} v
 * @returns {boolean}
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
 * This function evaluate whether arguments is date type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isDate(new Date());
 */
export function isDate(v) {
  return v instanceof Date;
}

/**
 * This function evaluate whether arguments is array like object
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isArrayLikeObject([]);
 */
export function isArrayLikeObject(v) {
  return v?.length >= 0;
}

/**
 * This function evaluate whether arguments is iterable object
 * @param {*} v
 * @returns {boolean}
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
 * This function evaluate whether arguments is Map type
 * @param {*} v
 * @returns {boolean}
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
 * This function evaluate whether arguments is Set type
 * @param {*} v
 * @returns {boolean}
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
 * This function evaluate whether arguments is WeakMap type
 * @param {*} v
 * @returns {boolean}
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
 * This function evaluate whether arguments is WeakSet type
 * @param {*} v
 * @returns {boolean}
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
 * This function evaluate whether arguments is primitive type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isPrimitive('test');
 */
export function isPrimitive(v) {
  return isString(v) || isNumber(v) || isBoolean(v) || isUndefined(v) || isNull(v) || isSymbol(v) || isBigInt(v);
}

/**
 * This function evaluate whether arguments is empty
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isEmpty(1);
 */
export function isEmpty(v) {
  for (const k in v) {
    if (Object.prototype.hasOwnProperty.call(v, k)) {
      return false;
    }
  }
  return true;
}

/**
 * This function evaluate whether arguments is object
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isObject({});
 */
export function isObject(v) {
  return typeof v === 'object';
}

/**
 * This function evaluate whether arguments is json plain object
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isJSONPlainObject('{ "x": 1 }');
 */
export function isJSONPlainObject(v) {
  try {
    return isPlainObject(JSON.parse(v));
  } catch (e) {
    return false;
  }
}

/**
 * This function evaluate whether arguments is json array
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isJSONArray('[1]');
 */
export function isJSONArray(v) {
  try {
    return isArray(JSON.parse(v));
  } catch (e) {
    return false;
  }
}

/**
 * This function evaluate whether arguments is json plain object or json array
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isJSONObject('{ "x": 1 }');
 */
export function isJSONObject(v) {
  return isJSONPlainObject(v) || isJSONArray(v);
}
