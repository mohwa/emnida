import { isNumber, isBigInt } from './type';
import { _isInteger, _isFinite, _isNaN } from './polyfill';

function isNumberOrBigInt(value) {
  return isNumber(value) || isBigInt(value);
}

/**
 * This function evaluates whether an arguments is floating point number
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isFloat(1.1); // true
 */
export function isFloat(value) {
  if (isNumberOrBigInt(value)) {
    return parseFloat(value) % 1 !== 0;
  }
  return false;
}

/**
 * This function evaluates whether an arguments is finite number
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isFinite(1); // true
 */
export function isFinite(value) {
  return _isFinite(value);
}

/**
 * This function evaluates whether an arguments is infinite number
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isInfinite(null); // true
 */
export function isInfinite(value) {
  return !_isFinite(value);
}

/**
 * This function evaluates whether an arguments is not a number
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isNaN(NaN); // true
 */
export function isNaN(value) {
  return _isNaN(value);
}

/**
 * This function evaluates whether first argument is greater
 * @param {*} value An any value which will be compared
 * @param {*} comparisonValue An any value which will be compared
 * @returns {boolean}
 * @example
 * isGreater(10, 1); // true
 */
export function isGreater(value, comparisonValue) {
  if (isNumberOrBigInt(value) && isNumberOrBigInt(comparisonValue)) {
    return value > comparisonValue;
  }
  return false;
}

/**
 * This function evaluates whether first argument is greater or equal
 * @param {*} value An any value which will be compared
 * @param {*} comparisonValue An any value which will be compared
 * @returns {boolean}
 * @example
 * isGreaterOrEqual(10, 10); // true
 */
export function isGreaterOrEqual(value, comparisonValue) {
  if (isNumberOrBigInt(value) && isNumberOrBigInt(comparisonValue)) {
    return value >= comparisonValue;
  }
  return false;
}

/**
 * This function evaluates whether first argument is less
 * @param {*} value An any value which will be compared
 * @param {*} comparisonValue An any value which will be compared
 * @returns {boolean}
 * @example
 * isLess(1, 10); // true
 */
export function isLess(value, comparisonValue) {
  if (isNumberOrBigInt(value) && isNumberOrBigInt(comparisonValue)) {
    return value < comparisonValue;
  }
  return false;
}

/**
 * This function evaluates whether first argument is less or equal
 * @param {*} value An any value which will be compared
 * @param {*} comparisonValue An any value which will be compared
 * @returns {boolean}
 * @example
 * isLessOrEqual(10, 10); // true
 */
export function isLessOrEqual(value, comparisonValue) {
  if (isNumberOrBigInt(value) && isNumberOrBigInt(comparisonValue)) {
    return value <= comparisonValue;
  }
  return false;
}

/**
 * This function evaluates whether an arguments is zero
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isZero(0); // true
 */
export function isZero(value) {
  if (isNumberOrBigInt(value)) {
    return value === 0;
  }
  return false;
}

/**
 * This function evaluates whether an arguments is integer
 * @param {*} value An any value
 * @returns {boolean}
 * @example
 * isInteger(1); // true
 */
export function isInteger(value) {
  return _isInteger(value);
}
