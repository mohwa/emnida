const { ...type } = require('./type');
// const { ...ua } = require('./ua');
// const { ...number } = require('./number');

const { isPrimitive, isFunction, isSymbol, isRegExp } = type;
const { isEqualAtObject } = require('./_utils');

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

function isEqualAtStringFunction(v, vv) {
  if (isFunction(v)) {
    return v.toString() === vv.toString();
  }
  return false;
}

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
  // ua,
  // number,
};
