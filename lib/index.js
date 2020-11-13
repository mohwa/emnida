const { ...type } = require('./type');
const { ...number } = require('./number');

const { isPrimitive, isFunction, isSymbol, isRegExp } = type;
const { isEqualAtObject } = require('./_utils');

/**
 * This function compare to whether equal first argument and second argument
 * @param {*} v
 * @param {*} vv
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
 * This function compare to whether equal first function and second function after casting as string type a two arguments
 * @param {Function} v
 * @param {Function} vv
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
 * This function compare to whether equal first symbol and second symbol after casting as string type a two arguments
 * @param {Symbol} v
 * @param {Symbol} vv
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
