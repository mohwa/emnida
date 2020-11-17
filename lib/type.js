import { getGlobalObject } from './_utils';

const globalObject = getGlobalObject();
/**
 * Return true or false after compare whether type is right
 * @namespace type
 */

/**
 * This function evaluate whether arguments is string type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
 * @example
 * isString('test');
 */
export function isString(v) {
  return typeof v === 'string';
}

/**
 * This function evaluate whether arguments is number type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
 * @example
 * isNumber(1);
 */
export function isNumber(v) {
  const _v = String(v).replace(/\s+/g, '');

  if (_v === '') {
    return false;
  }
  return typeof v === 'number';
}

/**
 * This function evaluate whether arguments is boolean type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
 * @example
 * isBoolean(true);
 */
export function isBoolean(v) {
  return typeof v === 'boolean';
}

/**
 * This function evaluate whether arguments is undefined type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
 * @example
 * isUndefined(undefined);
 */
export function isUndefined(v) {
  return v === undefined;
}

/**
 * This function evaluate whether arguments is null type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
 * @example
 * isNull(null);
 */
export function isNull(v) {
  return v === null;
}

/**
 * This function evaluate whether arguments is symbol type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
 * @example
 * isSymbol(Symbol(1));
 */
export function isSymbol(v) {
  return typeof v === 'symbol';
}

/**
 * This function evaluate whether arguments is bigint type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
 * @example
 * isBigInt(10n);
 */
export function isBigInt(v) {
  return typeof v === 'bigint';
}

/**
 * This function evaluate whether arguments is plain object type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
 * @example
 * isPlainObject({});
 */
export function isPlainObject(v) {
  return v?.constructor === Object;
}

/**
 * This function evaluate whether arguments is function type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
 * @example
 * isFunction(function(){});
 */
export function isFunction(v) {
  return typeof v === 'function';
}

/**
 * This function evaluate whether arguments is array type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
 * @example
 * isArray([]);
 */
export function isArray(v) {
  return Array.isArray(v);
}

/**
 * This function evaluate whether arguments is regexp type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
 * @example
 * isRegExp(new RegExp('\s+'));
 */
export function isRegExp(v) {
  return v instanceof RegExp;
}

/**
 * This function evaluate whether arguments is element type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
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
 * @memberof type
 * @returns {boolean}
 * @example
 * isDate(new Date());
 */
export function isDate(v) {
  return v instanceof Date;
}

/**
 * This function evaluate whether arguments is array like object type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
 * @example
 * isArrayLikeObject([]);
 */
export function isArrayLikeObject(v) {
  return !isEmpty(v?.length) || isMap(v) || isSet(v);
}

/**
 * This function evaluate whether arguments is iterator type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
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
 * This function evaluate whether arguments is Map object type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
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
 * This function evaluate whether arguments is Set object type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
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
 * This function evaluate whether arguments is WeakMap object type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
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
 * This function evaluate whether arguments is WeakSet object type
 * @param {*} v
 * @memberof type
 * @returns {boolean}
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
 * @memberof type
 * @returns {boolean}
 * @example
 * isPrimitive('test');
 */
export function isPrimitive(v) {
  return isString(v) || isNumber(v) || isBoolean(v) || isUndefined(v) || isNull(v) || isSymbol(v) || isBigInt(v);
}

/**
 * This function evaluate whether arguments is empty
 * @param {*} v
 * @memberof type
 * @returns {boolean}
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
