import {
  isFunction,
  isMap,
  isSet,
  isRegExp,
  isEmpty,
  isPrimitive,
  isArrayLikeObject,
  isIterableObject,
  isUndefined,
  isNull,
} from './type';

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

export function bindToFunction(v, _this, defaultV = function() {}) {
  let f = isFunction(v) ? v : defaultV;

  if (!isUndefined(_this) && !isNull(_this)) {
    f = f.bind(_this);
  }
  return f;
}

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from
export function _from(...args) {
  if (Array.from) {
    return Array.from(...args);
  } else {
    const toStr = Object.prototype.toString;
    const isCallable = fn => {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    const toInteger = value => {
      const number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    const maxSafeInteger = Math.pow(2, 53) - 1;
    const toLength = value => {
      const len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return ((arrayLike /*, mapFn, thisArg */) => {
      // 1. Let C be the this value.
      const C = this;

      // 2. Let items be ToObject(arrayLike).
      const items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      const mapFn = args.length > 1 ? args[1] : void undefined;
      let T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (args.length > 2) {
          T = args[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      const len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      const A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      let k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      let kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    })(...args);
  }
}

export function toArray(v, f, _this) {
  const _f = bindToFunction(f, _this, function(v, k) {
    return { k, v };
  });

  const arr = [];

  switch (true) {
    case isArrayLikeObject(v) || isIterableObject(v): {
      if (isMap(v)) {
        for (const vv of v) {
          const [k, _vv] = vv;
          arr.push(_f(_vv, k));
        }
        return arr;
      }
      return _from(v, f, _this);
    }
    default: {
      if (!isEmpty(v)) {
        Object.keys(v).forEach(k => {
          arr.push(_f(v[k], k));
        });
      }
      return arr;
    }
  }
}
