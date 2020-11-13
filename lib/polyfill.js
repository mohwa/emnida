import { isNumber } from './type';
import { isFinite } from './number';

export function _isInteger(v) {
  if (Number.isInteger) {
    return Number.isInteger(v);
  }
  return _isFinite(v) && Math.floor(v) === v;
}

export function _isFinite(v) {
  if (Number.isFinite) {
    return Number.isFinite(v);
  }
  return isNumber(v) && isFinite(v);
}

export function _isNaN(v) {
  if (Number.isNaN) {
    return Number.isNaN(v);
  }
  return v !== v;
}
