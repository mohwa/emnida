import { isPrimitive, isFunction, isSymbol, isRegExp } from './type';
import { isEqualAtObject } from './_utils';

export * from './type';
export * from './number';

/**
 * This function evaluates whether equal first argument and second argument
 * @param {*} v An any value which will be compared
 * @param {*} vv An any value which will be compared
 * @returns {boolean}
 * @example
 * isEqual(1, 1); // true
 */
export function isEqual(v, vv) {
  switch (true) {
    case isPrimitive(v) || isFunction(v): {
      return v === vv;
    }
    case isRegExp(v): {
      return v.toString() === vv.toString();
    }
    case v instanceof String || v instanceof Number || v instanceof Boolean: {
      return v.valueOf() === vv.valueOf();
    }
    default: {
      return isEqualAtObject(v, vv);
    }
  }
}

/**
 * This function evaluates whether equal first function and second function casted as string
 * @param {Function} v A function which will be compared
 * @param {Function} vv A function which will be compared
 * @returns {boolean}
 * @example
 * isEqualAtStringFunction(function() {}, function() {}); // true
 */
export function isEqualAtStringFunction(v, vv) {
  if (isFunction(v)) {
    return v.toString() === vv.toString();
  }
  return false;
}

/**
 * This function evaluates whether equal first symbol and second symbol casted as string
 * @param {Symbol} v A symbol which will be compared
 * @param {Symbol} vv A symbol which will be compared
 * @returns {boolean}
 * @example
 * isEqualAtStringSymbol(Symbol(1), Symbol(1)); // true
 */
export function isEqualAtStringSymbol(v, vv) {
  if (isSymbol(v)) {
    return v.toString() === vv.toString();
  }
  return false;
}
