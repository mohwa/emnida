import { isNumber, isBigInt } from './type';
import { _isInteger, _isFinite, _isNaN } from './polyfill';

function isNumberOrBigInt(v) {
  return isNumber(v) || isBigInt(v);
}

/**
 * This function evaluate whether arguments is floating point number
 * @param {*} v
 * @example
 * isFloat(1.1);
 */
export function isFloat(v) {
  if (isNumberOrBigInt(v)) {
    return parseFloat(v) % 1 !== 0;
  }
  return false;
}

/**
 * This function evaluate whether arguments is finite
 * @param {*} v
 * @example
 * isFinite(1);
 */
export function isFinite(v) {
  return _isFinite(v);
}

/**
 * This function evaluate whether arguments is infinite
 * @param {*} v
 * @example
 * isInfinite(null);
 */
export function isInfinite(v) {
  return !_isFinite(v);
}

/**
 * This function evaluate whether arguments is NaN
 * @param {*} v
 * @example
 * isNaN(NaN);
 */
export function isNaN(v) {
  return _isNaN(v);
}

/**
 * This function evaluate whether first argument is greater
 * @param {*} v
 * @param {*} vv
 * @example
 * isGreater(10, 1);
 */
export function isGreater(v, vv) {
  if (isNumberOrBigInt(v) && isNumberOrBigInt(vv)) {
    return v > vv;
  }
  return false;
}

/**
 * This function evaluate whether first argument is greater or equal
 * @param {*} v
 * @param {*} vv
 * @example
 * isGreaterOrEqual(10, 10);
 */
export function isGreaterOrEqual(v, vv) {
  if (isNumberOrBigInt(v) && isNumberOrBigInt(vv)) {
    return v >= vv;
  }
  return false;
}

/**
 * This function evaluate whether first argument is less
 * @param {*} v
 * @param {*} vv
 * @example
 * isLess(1, 10);
 */
export function isLess(v, vv) {
  if (isNumberOrBigInt(v) && isNumberOrBigInt(vv)) {
    return v < vv;
  }
  return false;
}

/**
 * This function evaluate whether first argument is less or equal
 * @param {*} v
 * @param {*} vv
 * @example
 * isLessOrEqual(10, 10);
 */
export function isLessOrEqual(v, vv) {
  if (isNumberOrBigInt(v) && isNumberOrBigInt(vv)) {
    return v <= vv;
  }
  return false;
}

/**
 * This function evaluate whether argument is zero
 * @param {*} v
 * @example
 * isZero(0);
 */
export function isZero(v) {
  if (isNumberOrBigInt(v)) {
    return v === 0;
  }
  return false;
}

/**
 * This function evaluate whether argument is integer
 * @param {*} v
 * @example
 * isInteger(1);
 */
export function isInteger(v) {
  return _isInteger(v);
}
