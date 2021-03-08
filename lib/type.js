import { getGlobalObject } from './_utils';

const globalObject = getGlobalObject();

/**
 * This function evaluates whether an arguments is string type
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isString('test'); // true
 */
export function isString(value) {
  return typeof value === 'string';
}

/**
 * This function evaluates whether an arguments is number type
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isNumber(1); // true
 */
export function isNumber(value) {
  return typeof value === 'number';
}

/**
 * This function evaluates whether an arguments is boolean type
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isBoolean(true); // true
 */
export function isBoolean(value) {
  return typeof value === 'boolean';
}

/**
 * This function evaluates whether an arguments is undefined
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isUndefined(undefined); // true
 */
export function isUndefined(value) {
  return value === undefined;
}

/**
 * This function evaluates whether an arguments is defined
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isDefined(undefined); // false
 */
export function isDefined(value) {
  return !isUndefined(value);
}

/**
 * This function evaluates whether an arguments is null
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isNull(null); // true
 */
export function isNull(value) {
  return value === null;
}

/**
 * This function evaluates whether an arguments is symbol type
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isSymbol(Symbol(1)); // true
 */
export function isSymbol(value) {
  return typeof value === 'symbol';
}

/**
 * This function evaluates whether an arguments is bigint type
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isBigInt(10n); // true
 */
export function isBigInt(value) {
  return typeof value === 'bigint';
}

/**
 * This function evaluates whether an arguments is function type
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isFunction(function(){}); // true
 */
export function isFunction(value) {
  return typeof value === 'function';
}

/**
 * This function evaluates whether an arguments is object type
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isObject(null); // true
 */
export function isObject(value) {
  return typeof value === 'object';
}

/**
 * This function evaluates whether an arguments is object type not included null
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isObject(null); // false
 */
export function isObjectNotIncludeNull(value) {
  return isObject(value) && !isNull(value);
}

/**
 * This function evaluates whether an arguments is plain object
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isPlainObject({}); // true
 */
export function isPlainObject(value) {
  // I added value.length condition because an arguments has length property.
  return isUndefined(value?.length) && value?.constructor === Object;
}

/**
 * This function evaluates whether an arguments is array type
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isArray([]); // true
 */
export function isArray(value) {
  return Array.isArray(value);
}

/**
 * This function evaluates whether an arguments is regex
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isRegExp(new RegExp('\s+')); // true
 */
export function isRegExp(value) {
  return value instanceof RegExp;
}

/**
 * This function evaluates whether an arguments is element
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isElement(document.documentElement); // true
 */
export function isElement(value) {
  if (!(isFunction(globalObject.HTMLElement) || isPlainObject(globalObject.HTMLElement))) {
    return false;
  }
  return value instanceof HTMLElement;
}

/**
 * This function evaluates whether an arguments is date
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isDate(new Date()); // true
 */
export function isDate(value) {
  return value instanceof Date;
}

/**
 * This function evaluates whether an arguments is array like object
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isArrayLikeObject([]); // true
 */
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from
export function isArrayLikeObject(value) {
  return value?.length > 0;
}

/**
 * This function evaluates whether an arguments is iterable object
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isIterableObject([]); // true
 */
export function isIterableObject(value) {
  if (!isFunction(globalObject.Symbol)) {
    return false;
  }
  return typeof value?.[Symbol.iterator] === 'function';
}

/**
 * This function evaluates whether an arguments is Map
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isMap(new Map()); // true
 */
export function isMap(value) {
  if (!isFunction(globalObject.Map)) {
    return false;
  }
  return value instanceof Map;
}

/**
 * This function evaluates whether an arguments is Set
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isSet(new Set()); // true
 */
export function isSet(value) {
  if (!isFunction(globalObject.Set)) {
    return false;
  }
  return value instanceof Set;
}

/**
 * This function evaluates whether an arguments is WeakMap
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isWeakMap(new WeakMap()); // true
 */
export function isWeakMap(value) {
  if (!isFunction(globalObject.WeakMap)) {
    return false;
  }
  return value instanceof WeakMap;
}

/**
 * This function evaluates whether an arguments is WeakSet
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isWeakSet(new WeakSet()); // true
 */
export function isWeakSet(value) {
  if (!isFunction(globalObject.WeakSet)) {
    return false;
  }
  return value instanceof WeakSet;
}

/**
 * This function evaluates whether an arguments is primitive type
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isPrimitive('test'); // true
 */
export function isPrimitive(value) {
  return (
    isString(value) ||
    isNumber(value) ||
    isBoolean(value) ||
    isUndefined(value) ||
    isNull(value) ||
    isSymbol(value) ||
    isBigInt(value)
  );
}

/**
 * This function evaluates whether an arguments is empty
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isEmpty(1); // true
 */
export function isEmpty(value) {
  for (const k in value) {
    if (Object.prototype.hasOwnProperty.call(value, k)) {
      return false;
    }
  }
  return true;
}

/**
 * This function evaluates whether an arguments is json plain object string
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isJSONPlainObjectString('{ "x": 1 }'); // true
 */
export function isJSONPlainObjectString(value) {
  try {
    return isPlainObject(JSON.parse(value));
  } catch (e) {
    return false;
  }
}

/**
 * This function evaluates whether an arguments is json array string
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isJSONArrayString('[1]'); // true
 */
export function isJSONArrayString(value) {
  try {
    return isArray(JSON.parse(value));
  } catch (e) {
    return false;
  }
}

/**
 * This function evaluates whether an arguments is json plain object string or json array string
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isJSONObjectString('{ "x": 1 }'); // true
 */
export function isJSONObjectString(value) {
  return isJSONPlainObjectString(value) || isJSONArrayString(value);
}
