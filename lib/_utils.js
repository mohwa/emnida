import {
  isArray,
  isArrayLikeObject,
  isIterableObject,
  isPlainObject,
  isEqualType,
  isString,
  isNumber,
  isBoolean,
  isUndefined,
  isNull,
  isBigInt,
  isElement,
  isSymbol,
  isFunction,
  isDate,
} from './type';

export function toArray(v, f, _this, isPureValue) {
  if (isArray(v)) return v;

  if (isArrayLikeObject(v) || isIterableObject(v)) {
    return Array.from(v, f, _this);
  } else {
    if (isPlainObject(v)) {
      return Object.keys(v).reduce((acc, k) => {
        acc.push(isPureValue ? v[k] : { k, v: v[k] });

        return acc;
      }, []);
    }
  }
}

export function getSize(v) {
  if (isArrayLikeObject(v)) {
    return v.length;
  } else {
    return toArray(v)?.length || 0;
  }
}

export function isEqualWithoutObject(v, vv) {
  if (!isEqualType(v, vv)) {
    return false;
  }

  switch (true) {
    case isString(v) || isNumber(v) || isBoolean(v) || isUndefined(v) || isNull(v) || isBigInt(v) || isElement(v): {
      return v === vv;
    }
    case isSymbol(v): {
      return v.valueOf() === vv.valueOf();
    }
    case isFunction(v): {
      return v.toString() === vv.toString();
    }
    case isDate(v): {
      return v.valueOf() === vv.valueOf();
    }
  }
}

export function isEqualObject(v, vv) {
  if (!isEqualType(v, vv)) {
    return false;
  }

  const stacks = [{ preV: v, nextV: vv }];
  let stack;

  while ((stack = stacks.pop())) {
    const { preV, nextV } = stack;

    if (!isEqualType(preV, nextV)) {
      return false;
    }

    switch (true) {
      case isPlainObject(preV): {
        if (getSize(preV) !== getSize(nextV)) {
          return false;
        }

        stacks.push(
          ...Object.keys(preV).reduce((acc, k) => {
            acc.push({ preV: preV[k], nextV: nextV[k] });
            return acc;
          }, [])
        );
        break;
      }
      case isArray(preV): {
        if (getSize(preV) !== getSize(nextV)) {
          return false;
        }

        stacks.push(
          ...preV.reduce((acc, _v, i) => {
            acc.push({ preV: _v, nextV: nextV[i] });
            return acc;
          }, [])
        );
        break;
      }
      default: {
        if (!isEqualWithoutObject(preV, nextV)) {
          return false;
        }
      }
    }
  }
  return true;
}
