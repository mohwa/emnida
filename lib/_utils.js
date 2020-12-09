import * as arrayOrganizer from 'array-organizer';
import { isFunction, isMap, isSet, isRegExp, isEmpty, isPrimitive } from './type';

const arrayOrganizerLength = Object.keys(arrayOrganizer.default).length;
const { toArray } = arrayOrganizerLength ? arrayOrganizer.default : arrayOrganizer;

export function getSize(v) {
  switch (true) {
    case !isEmpty(v?.length):
      return v.length;
    default: {
      return toArray(v)?.length || 0;
    }
  }
}

export function isEqualAtObject(v, vv) {
  const stacks = [{ preV: v, nextV: vv }];
  let stack;

  while ((stack = stacks.pop())) {
    const { preV, nextV } = stack || {};

    switch (true) {
      case isPrimitive(preV) || isFunction(preV): {
        if (preV !== nextV) {
          return false;
        }
        break;
      }
      case isRegExp(preV): {
        if (preV.toString() !== nextV.toString()) {
          return false;
        }
        break;
      }
      case preV instanceof String || preV instanceof Number || preV instanceof Boolean: {
        if (preV.valueOf() !== nextV.valueOf()) {
          return false;
        }
        break;
      }
      default: {
        if (getSize(preV) !== getSize(nextV)) {
          return false;
        }

        toArray(preV, (vv, k) => {
          let _nextV = nextV[k];

          if (isMap(nextV)) {
            _nextV = nextV.get(k);
          }

          if (isSet(nextV)) {
            if (nextV.has(vv)) {
              _nextV = toArray(nextV)[k];
            }
          }
          stacks.push({ preV: vv, nextV: _nextV });
        });
        break;
      }
    }
  }
  return true;
}

export function getGlobalObject() {
  try {
    return window;
  } catch (e) {
    return global;
  }
}
