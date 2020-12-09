import * as _type from './type';
import * as _number from './number';
import * as utils from './_utils';

const { isPrimitive, isFunction, isSymbol, isRegExp } = _type;
const { isEqualAtObject } = utils;

export const type = _type;
export const number = _number;

/**
 * This function evaluate whether equal first argument and second argument
 * @param {*} v
 * @param {*} vv
 * @returns {boolean}
 * @example
 * isEqual(1, 1);
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
 * This function evaluate whether equal first function and second function casted as string type
 * @param {Function} v
 * @param {Function} vv
 * @returns {boolean}
 * @example
 * isEqualAtStringFunction(function() {}, function() {});
 */
export function isEqualAtStringFunction(v, vv) {
  if (isFunction(v)) {
    return v.toString() === vv.toString();
  }
  return false;
}

/**
 * This function evaluate whether equal first symbol and second symbol casted as string type
 * @param {Symbol} v
 * @param {Symbol} vv
 * @returns {boolean}
 * @example
 * isEqualAtStringSymbol(Symbol(1), Symbol(1));
 */
export function isEqualAtStringSymbol(v, vv) {
  if (isSymbol(v)) {
    return v.toString() === vv.toString();
  }
  return false;
}
