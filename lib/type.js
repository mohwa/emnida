import { getGlobalObject } from './_utils';

const globalObject = getGlobalObject();

/**
 * This function evaluates whether an arguments is string type
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isString('test'); // true
 */
export function isString(v) {
  return typeof v === 'string';
}

/**
 * This function evaluates whether an arguments is number type
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isNumber(1); // true
 */
export function isNumber(v) {
  return typeof v === 'number';
}

/**
 * This function evaluates whether an arguments is boolean type
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isBoolean(true); // true
 */
export function isBoolean(v) {
  return typeof v === 'boolean';
}

/**
 * This function evaluates whether an arguments is undefined
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isUndefined(undefined); // true
 */
export function isUndefined(v) {
  return v === undefined;
}

/**
 * This function evaluates whether an arguments is defined
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isDefined(undefined); // false
 */
export function isDefined(v) {
  return !isUndefined(v);
}

/**
 * This function evaluates whether an arguments is null
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isNull(null); // true
 */
export function isNull(v) {
  return v === null;
}

/**
 * This function evaluates whether an arguments is symbol type
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isSymbol(Symbol(1)); // true
 */
export function isSymbol(v) {
  return typeof v === 'symbol';
}

/**
 * This function evaluates whether an arguments is bigint type
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isBigInt(10n); // true
 */
export function isBigInt(v) {
  return typeof v === 'bigint';
}

/**
 * This function evaluates whether an arguments is function type
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isFunction(function(){}); // true
 */
export function isFunction(v) {
  return typeof v === 'function';
}

/**
 * This function evaluates whether an arguments is object type
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isObject(null); // true
 */
export function isObject(v) {
  return typeof v === 'object';
}

/**
 * This function evaluates whether an arguments is object type not included null
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isObject(null); // false
 */
export function isObjectNotIncludeNull(v) {
  return isObject(v) && !isNull(v);
}

/**
 * This function evaluates whether an arguments is plain object
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isPlainObject({}); // true
 */
export function isPlainObject(v) {
  // I added v.length condition because an arguments has length property.
  return isUndefined(v?.length) && v?.constructor === Object;
}

/**
 * This function evaluates whether an arguments is array type
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isArray([]); // true
 */
export function isArray(v) {
  return Array.isArray(v);
}

/**
 * This function evaluates whether an arguments is regex
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isRegExp(new RegExp('\s+')); // true
 */
export function isRegExp(v) {
  return v instanceof RegExp;
}

/**
 * This function evaluates whether an arguments is element
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isElement(document.documentElement); // true
 */
export function isElement(v) {
  if (!(isFunction(globalObject.HTMLElement) || isPlainObject(globalObject.HTMLElement))) {
    return false;
  }
  return v instanceof HTMLElement;
}

/**
 * This function evaluates whether an arguments is date
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isDate(new Date()); // true
 */
export function isDate(v) {
  return v instanceof Date;
}

/**
 * This function evaluates whether an arguments is array like object
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isArrayLikeObject([]); // true
 */
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from
export function isArrayLikeObject(v) {
  return v?.length > 0;
}

/**
 * This function evaluates whether an arguments is iterable object
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isIterableObject([]); // true
 */
export function isIterableObject(v) {
  if (!isFunction(globalObject.Symbol)) {
    return false;
  }
  return typeof v?.[Symbol.iterator] === 'function';
}

/**
 * This function evaluates whether an arguments is Map
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isMap(new Map()); // true
 */
export function isMap(v) {
  if (!isFunction(globalObject.Map)) {
    return false;
  }
  return v instanceof Map;
}

/**
 * This function evaluates whether an arguments is Set
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isSet(new Set()); // true
 */
export function isSet(v) {
  if (!isFunction(globalObject.Set)) {
    return false;
  }
  return v instanceof Set;
}

/**
 * This function evaluates whether an arguments is WeakMap
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isWeakMap(new WeakMap()); // true
 */
export function isWeakMap(v) {
  if (!isFunction(globalObject.WeakMap)) {
    return false;
  }
  return v instanceof WeakMap;
}

/**
 * This function evaluates whether an arguments is WeakSet
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isWeakSet(new WeakSet()); // true
 */
export function isWeakSet(v) {
  if (!isFunction(globalObject.WeakSet)) {
    return false;
  }
  return v instanceof WeakSet;
}

/**
 * This function evaluates whether an arguments is primitive type
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isPrimitive('test'); // true
 */
export function isPrimitive(v) {
  return isString(v) || isNumber(v) || isBoolean(v) || isUndefined(v) || isNull(v) || isSymbol(v) || isBigInt(v);
}

/**
 * This function evaluates whether an arguments is empty
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isEmpty(1); // true
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
 * This function evaluates whether an arguments is json plain object string
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isJSONPlainObjectString('{ "x": 1 }'); // true
 */
export function isJSONPlainObjectString(v) {
  try {
    return isPlainObject(JSON.parse(v));
  } catch (e) {
    return false;
  }
}

/**
 * This function evaluates whether an arguments is json array string
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isJSONArrayString('[1]'); // true
 */
export function isJSONArrayString(v) {
  try {
    return isArray(JSON.parse(v));
  } catch (e) {
    return false;
  }
}

/**
 * This function evaluates whether an arguments is json plain object string or json array string
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isJSONObjectString('{ "x": 1 }'); // true
 */
export function isJSONObjectString(v) {
  return isJSONPlainObjectString(v) || isJSONArrayString(v);
}
