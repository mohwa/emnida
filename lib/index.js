const { ...type } = require('./type');
const { ...number } = require('./number');

const { isPrimitive, isFunction, isSymbol, isRegExp } = type;
const { isEqualAtObject } = require('./_utils');

/**
 * This function evaluate whether equal first argument and second argument
 * @param {*} v
 * @param {*} vv
 * @returns {boolean}
 * @example
 * isEqual(1, 1);
 */
function isEqual(v, vv) {
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
function isEqualAtStringFunction(v, vv) {
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
function isEqualAtStringSymbol(v, vv) {
  if (isSymbol(v)) {
    return v.toString() === vv.toString();
  }
  return false;
}

module.exports = {
  isEqual,
  isEqualAtStringFunction,
  isEqualAtStringSymbol,
  type,
  number,
};
