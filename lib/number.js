import { isNumber, isBigInt } from './type';
import { _isInteger, _isFinite, _isNaN } from './polyfill';

function isNumberOrBigInt(v) {
  return isNumber(v) || isBigInt(v);
}

/**
 * This function evaluates whether an arguments is floating point number
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isFloat(1.1); // true
 */
export function isFloat(v) {
  if (isNumberOrBigInt(v)) {
    return parseFloat(v) % 1 !== 0;
  }
  return false;
}

/**
 * This function evaluates whether an arguments is finite number
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isFinite(1); // true
 */
export function isFinite(v) {
  return _isFinite(v);
}

/**
 * This function evaluates whether an arguments is infinite number
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isInfinite(null); // true
 */
export function isInfinite(v) {
  return !_isFinite(v);
}

/**
 * This function evaluates whether an arguments is not a number
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isNaN(NaN); // true
 */
export function isNaN(v) {
  return _isNaN(v);
}

/**
 * This function evaluates whether first argument is greater
 * @param {*} v An any value which will be compared
 * @param {*} vv An any value which will be compared
 * @returns {boolean}
 * @example
 * isGreater(10, 1); // true
 */
export function isGreater(v, vv) {
  if (isNumberOrBigInt(v) && isNumberOrBigInt(vv)) {
    return v > vv;
  }
  return false;
}

/**
 * This function evaluates whether first argument is greater or equal
 * @param {*} v An any value which will be compared
 * @param {*} vv An any value which will be compared
 * @returns {boolean}
 * @example
 * isGreaterOrEqual(10, 10); // true
 */
export function isGreaterOrEqual(v, vv) {
  if (isNumberOrBigInt(v) && isNumberOrBigInt(vv)) {
    return v >= vv;
  }
  return false;
}

/**
 * This function evaluates whether first argument is less
 * @param {*} v An any value which will be compared
 * @param {*} vv An any value which will be compared
 * @returns {boolean}
 * @example
 * isLess(1, 10); // true
 */
export function isLess(v, vv) {
  if (isNumberOrBigInt(v) && isNumberOrBigInt(vv)) {
    return v < vv;
  }
  return false;
}

/**
 * This function evaluates whether first argument is less or equal
 * @param {*} v An any value which will be compared
 * @param {*} vv An any value which will be compared
 * @returns {boolean}
 * @example
 * isLessOrEqual(10, 10); // true
 */
export function isLessOrEqual(v, vv) {
  if (isNumberOrBigInt(v) && isNumberOrBigInt(vv)) {
    return v <= vv;
  }
  return false;
}

/**
 * This function evaluates whether an arguments is zero
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isZero(0); // true
 */
export function isZero(v) {
  if (isNumberOrBigInt(v)) {
    return v === 0;
  }
  return false;
}

/**
 * This function evaluates whether an arguments is integer
 * @param {*} v An any value
 * @returns {boolean}
 * @example
 * isInteger(1); // true
 */
export function isInteger(v) {
  return _isInteger(v);
}
