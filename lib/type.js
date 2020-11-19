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
  return v instanceof globalObject.HTMLElement;
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
 * This function evaluate whether arguments is array like object type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isArrayLikeObject([]);
 */
export function isArrayLikeObject(v) {
  return isNumber(v?.length);
}

/**
 * This function evaluate whether arguments is iterable type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isIterableObject([]);
 */
export function isIterableObject(v) {
  return typeof v?.[globalObject.Symbol?.iterator] === 'function';
}

/**
 * This function evaluate whether arguments is Map object type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isMap(new Map());
 */
export function isMap(v) {
  return v instanceof globalObject.Map;
}

/**
 * This function evaluate whether arguments is Set object type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isSet(new Set());
 */
export function isSet(v) {
  return v instanceof globalObject.Set;
}

/**
 * This function evaluate whether arguments is WeakMap object type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isWeakMap(new WeakMap());
 */
export function isWeakMap(v) {
  return v instanceof globalObject.WeakMap;
}

/**
 * This function evaluate whether arguments is WeakSet object type
 * @param {*} v
 * @returns {boolean}
 * @memberof type
 * @example
 * isWeakSet(new WeakSet());
 */
export function isWeakSet(v) {
  return v instanceof globalObject.WeakSet;
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
