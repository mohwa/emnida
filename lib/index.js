import { isPrimitive, isFunction, isSymbol, isRegExp } from './type';
import { isEqualAtObject } from './_utils';

export * from './type';
export * from './number';

/**
 * This function evaluates whether equal first argument and second argument
 * @param {*} value An any value which will be compared
 * @param {*} comparisonValue An any value which will be compared
 * @returns {boolean}
 * @example
 * isEqual(1, 1); // true
 */
export function isEqual(value, comparisonValue) {
  switch (true) {
    case isPrimitive(value) || isFunction(value): {
      return value === comparisonValue;
    }
    case isRegExp(value): {
      return value.toString() === comparisonValue.toString();
    }
    case value instanceof String || value instanceof Number || value instanceof Boolean: {
      return value.valueOf() === comparisonValue.valueOf();
    }
    default: {
      return isEqualAtObject(value, comparisonValue);
    }
  }
}

/**
 * This function evaluates whether equal first function and second function casted as string
 * @param {Function} value A function which will be compared
 * @param {Function} comparisonValue A function which will be compared
 * @returns {boolean}
 * @example
 * isEqualAtStringFunction(function() {}, function() {}); // true
 */
export function isEqualAtStringFunction(value, comparisonValue) {
  if (isFunction(value)) {
    return value.toString() === comparisonValue.toString();
  }
  return false;
}

/**
 * This function evaluates whether equal first symbol and second symbol casted as string
 * @param {Symbol} value A symbol which will be compared
 * @param {Symbol} comparisonValue A symbol which will be compared
 * @returns {boolean}
 * @example
 * isEqualAtStringSymbol(Symbol(1), Symbol(1)); // true
 */
export function isEqualAtStringSymbol(value, comparisonValue) {
  if (isSymbol(value)) {
    return value.toString() === comparisonValue.toString();
  }
  return false;
}
