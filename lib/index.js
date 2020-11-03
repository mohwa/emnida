const { ...type } = require('./type');
// const { ...ua } = require('./ua');
// const { ...number } = require('./number');

const { isPrimitiveWithoutSymbol } = type;
const { isEqualAtObject } = require('./_utils');

function isEqual(v, vv) {
  if (isPrimitiveWithoutSymbol(v)) {
    return v === vv;
  } else {
    return isEqualAtObject(v, vv);
  }
}

module.exports = {
  isEqual,
  type,
  // ua,
  // number,
};
