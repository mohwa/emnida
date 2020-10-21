const { ...type } = require('./type');
const { ...ua } = require('./ua');
const { ...number } = require('./number');
const { isEqualObject, isEqualWithoutObject } = require('./_utils');

const { isPlainObject, isArray, isEqualType } = type;

function isEqual(v, vv) {
  if (!isEqualType(v, vv)) {
    return false;
  }

  if (isPlainObject(v) || isArray(v)) {
    return isEqualObject(v, vv);
  } else {
    return isEqualWithoutObject(v, vv);
  }
}

module.exports = {
  isEqual,
  type,
  ua,
  number,
};
