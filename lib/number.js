import { isNumber } from './type';

export function isFloat(v) {
  if (isNumber(v)) {
    return parseFloat(v) % 1 !== 0;
  }
  return false;
}

export function isFinite(v) {
  return Number.isFinite(v);
}

export function isInfinite(v) {
  return !isFinite(v);
}

export function isNaN(v) {
  return Number.isNaN(v);
}
