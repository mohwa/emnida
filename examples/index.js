import { isEqual, isEqualAtStringFunction, isEqualAtStringSymbol } from '../lib';
import {
  isFunction,
  isNumber,
  isString,
  isArray,
  isArrayLikeObject,
  isBoolean,
  isDate,
  isElement,
  isEmpty,
  isIterableObject,
  isMap,
  isNull,
  isPlainObject,
  isPrimitive,
  isRegExp,
  isSet,
  isSymbol,
  isUndefined,
  isWeakMap,
  isWeakSet,
} from '../lib/type';
import {
  isInteger,
  isZero,
  isLessOrEqual,
  isGreaterOrEqual,
  isGreater,
  isNaN,
  isInfinite,
  isFinite,
  isFloat,
  isLess,
} from '../lib/number';

import { getGlobalObject } from '../lib/_utils';

const globalObject = getGlobalObject();

console.log('Type');

console.log(isString('test')); // true
console.log(isNumber(1)); // true
console.log(isBoolean(true)); // true
console.log(isUndefined(undefined)); // true
console.log(isNull(null)); // true

if (isFunction(globalObject?.Symbol)) {
  console.log(isSymbol(Symbol(3))); // true
  console.log(isIterableObject('')); // true
  console.log(isIterableObject([])); // true
}

console.log(isFunction(function() {})); // true
console.log(isArray([])); // true
console.log(isArrayLikeObject([])); // true
console.log(isDate(new Date())); // true

if (globalObject?.document) {
  console.log(isElement(document.documentElement)); // true
}

console.log(isPlainObject({})); // true

if (isFunction(globalObject?.Map)) {
  console.log(isIterableObject(new Map())); // true
  console.log(isIterableObject(new Set())); // true

  console.log(isMap(new Map())); // true
  console.log(isSet(new Set())); // true

  console.log(isWeakMap(new WeakMap())); // true
  console.log(isWeakSet(new WeakSet())); // true
}

console.log(isPrimitive(1)); // true
console.log(isRegExp(new RegExp('\\s+'))); // true

console.log(isEmpty('')); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty(null)); // true
console.log(isEmpty({})); // true
console.log(isEmpty([])); // true
console.log(isEmpty(1)); // false
console.log(isEmpty(false)); // false

if (isFunction(globalObject?.Symbol)) {
  console.log(isEmpty(Symbol(3))); // false
}

console.log('Number');

console.log(isInteger(1));
console.log(isInteger(0.1));

console.log(isZero(0));

console.log(isLess(1, 10));
console.log(isLess(10, 1));
console.log(isLessOrEqual(10, 10));
console.log(isLessOrEqual(10, 12));

console.log(isGreater(10, 1));
console.log(isGreater(1, 10));
console.log(isGreaterOrEqual(10, 10));
console.log(isGreaterOrEqual(12, 10));

console.log(isNaN(0 / 0));
console.log(isInfinite(Infinity));
console.log(isFinite(Infinity));

console.log(isFloat(0.1));
console.log(isFloat(1));

console.log('isEqual');

console.log(isEqual('1', '1'));
console.log(isEqual(2, 2));
console.log(isEqual(true, true));

console.log(isEqual(undefined, null));
console.log(isEqual(null, ''));

if (isFunction(globalObject?.Symbol)) {
  console.log(isEqual(Symbol(3), false));
  console.log(isEqual(Symbol(3), Symbol(3)));

  console.log(isEqualAtStringSymbol(Symbol(3), Symbol(3)));

  const symbol4 = Symbol(4);
  console.log(isEqual(symbol4, symbol4));
}

console.log(isEqual({ x: 2, y: 1 }, { y: 1, x: 2 }));
console.log(isEqual({ x: 2, y: 1, z: '3' }, { x: 2, y: 1, z: '3' }));
console.log(isEqual([1, 3, 4, 5], [1, 3, 4, 5]));

console.log(isEqual([1, { xx: 1 }, 4, 5], [1, { yy: 1 }, 4, 5]));
console.log(isEqual([1, { xx: 1 }, 4, 5], [1, { xx: 1 }, 4, 5, '7']));
console.log(isEqual([1, 3, 4, () => {}], [1, 3, 4, () => {}, { x: 2 }]));
console.log(
  isEqual(
    function() {
      console.log(2);
    },
    function() {
      console.log(2);
    }
  )
);
console.log(
  isEqual(
    () => {
      console.log(1);
    },
    () => {
      console.log(1);
    }
  )
);

console.log(
  isEqualAtStringFunction(
    function() {
      console.log(2);
    },
    function() {
      console.log(2);
    }
  )
);
console.log(
  isEqualAtStringFunction(
    () => {
      console.log(1);
    },
    () => {
      console.log(1);
    }
  )
);

console.log(isEqual(new String(1), new String(1)));
console.log(isEqual(new Number(1), new Number(1)));
console.log(isEqual(new Boolean(true), new Boolean(true)));
console.log(isEqual(new Function('console.log(1)'), new Function('console.log(3333)')));
console.log(isEqual(new RegExp('\\d+'), new RegExp('[a-z]+')));
console.log(isEqual(new RegExp('\\s+'), new RegExp('\\s*')));

if (isFunction(globalObject?.Map)) {
  const m1 = new Map();
  m1.set('x', 1);
  m1.set('y', 2);

  const m2 = new Map();
  m2.set('x', 1);
  m2.set('y', 2);

  const m3 = new Map();
  m3.set('x', 1);
  m3.set('y', 2);
  m3.set('z', 3);

  console.log(isEqual(new Map(), new Map()));
  console.log(isEqual(m1, m2));

  console.log(isEqual(m1, m3));
  console.log(isEqual(m2, m3));

  const s1 = new Set();
  s1.add(1);
  s1.add(2);

  const s2 = new Set();
  s2.add(1);
  s2.add(2);

  const s3 = new Set();
  s3.add(1);
  s3.add(2);
  s3.add(33);

  console.log(isEqual(s1, s2));
  console.log(isEqual(s1, s3));
}

if (isFunction(globalObject?.URL)) {
  const url1 = new URL('https://javascript.info/profile/admin');
  const url2 = new URL('https://javascript.info/profile/admin');
  const url3 = new URL('https://javascript.info/profile/admin-1');

  console.log(isEqual(url1, url2));
  console.log(isEqual(url1, url3));
}
