import { isNumber, isBigInt } from './type';
import { _isInteger, _isFinite, _isNaN } from './polyfill';

function isNumberOrBigInt(v) {
  return isNumber(v) || isBigInt(v);
}

/**
 * Return a true when arguments is float type
 * @private
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
 * Return a true when arguments is finite
 * @private
 * @param {*} v
 * @example
 * isFinite(1);
 */
export function isFinite(v) {
  return _isFinite(v);
}

/**
 * Return a true when arguments is infinite
 * @private
 * @param {*} v
 * @example
 * isInfinite(null);
 */
export function isInfinite(v) {
  return !isFinite(v);
}

/**
 * Return a true when arguments is NaN
 * @private
 * @param {*} v
 * @example
 * isNaN(NaN);
 */
export function isNaN(v) {
  return _isNaN(v);
}

/**
 * Return a true when first argument is greater
 * @private
 * @param {*} v
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
 * Return a true when first argument is greater or equal
 * @private
 * @param {*} v
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
 * Return a true when first argument is less
 * @private
 * @param {*} v
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
 * Return a true when first argument is less or equal
 * @private
 * @param {*} v
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
 * Return a true when first argument is zero
 * @private
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
 * Return a true when first argument is integer
 * @private
 * @param {*} v
 * @example
 * isInteger(1);
 */
export function isInteger(v) {
  return _isInteger(v);
}
