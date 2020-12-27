# emnida

![npm](https://img.shields.io/npm/v/emnida) [![](https://data.jsdelivr.com/v1/package/npm/emnida/badge)](https://www.jsdelivr.com/package/npm/emnida) ![npm bundle size](https://img.shields.io/bundlephobia/min/emnida) ![npm](https://img.shields.io/npm/dm/emnida) ![NPM](https://img.shields.io/npm/l/emnida)

`emnida` library will be used to check when any situation like a data type or value check in the javascript.

[API Documentation](http://mohwa.github.io/emnida)

# Install

```javascript
npm i emnida
```

# Support Platforms

IE9 later, All modern browsers(Chrome, Safari, Edge ...), NodeJS(`10.0.0` version later).

## Normal Type API

These apis will be able to used to check normal data type like the code follows.

```javascript
import { type } from 'emnida';

const {
  isString,
  isArray,
  isBigInt,
  isBoolean,
  isDate,
  isFunction,
  isMap,
  isNull,
  isNumber,
  isPlainObject,
  isRegExp,
  isSet,
  isSymbol,
  isUndefined,
  isWeakMap,
  isWeakSet,
  isObject,
} = type;

console.log(isString('test')); // true
console.log(isNumber(1)); // true
console.log(isBoolean(true)); // true
console.log(isNull(null)); // true
console.log(isUndefined(undefined)); // true
console.log(isSymbol(Symbol(1))); // true
console.log(isBigInt(10n)); // true

console.log(isPlainObject({})); // true
console.log(isArray([])); // true
console.log(isFunction(() => {})); // true

console.log(isMap(new Map())); // true
console.log(isWeakMap(new WeakMap())); // true

console.log(isSet(new Set())); // true
console.log(isWeakSet(new WeakSet())); // true

console.log(isDate(new Date())); // true
console.log(isRegExp(new RegExp('\\s+'))); // true

console.log(isObject([])); // true
```

## Special Type API

These apis will be able to use in the special cases like the DOM element or empty value check.

```javascript
import { type } from 'emnida';

const { isArrayLikeObject, isElement, isEmpty, isIterableObject, isPrimitive } = type;

console.log(isPrimitive('test')); // true
console.log(isPrimitive(1)); // true
console.log(isPrimitive(true)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive(Symbol(1))); // true
console.log(isPrimitive(10n)); // true

console.log(isElement(document.documentElement)); // true
console.log(isArrayLikeObject('test')); // true

console.log(isEmpty(null)); // true
console.log(isIterableObject([])); // true
```

## Number Type API

These apis will be able to evaluate an arguments in the multiple case of number type

```javascript
import { number } from 'emnida';

const {
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
} = number;

isInteger(1); // true
isInteger(0.1); // false

isZero(0) // true

isLess(1, 10); // true
isLess(10, 1); // false

isLessOrEqual(10, 10); // true
isLessOrEqual(10, 12); // true

isGreater(10, 1); // true
isGreater(1, 10); // false

isGreaterOrEqual(10, 10); // true
isGreaterOrEqual(12, 10); // true

isNaN(0 / 0); // true

isInfinite(Infinity); // true
isFinite(Infinity); // false

isFloat(0.1); // true
isFloat(1); // false
```

## isEqual API

This api will be able to used to compare two value like the code follows

```javascript
import { isEqual } from 'emnida';

// Primitive type examples
console.log(isEqual('1', '1')); // true
console.log(isEqual(2, 2)); // true
console.log(isEqual(true, true)); // true

console.log(isEqual(undefined, null)); // false
console.log(isEqual(null, '')); // false
console.log(isEqual(Symbol(3), Symbol(3))); // false

// Object type examples
console.log(isEqual({ x: 2, y: 1 }, { y: 1, x: 2 })); // true
console.log(isEqual({ x: 2, y: 1 }, { x: 2, y: 1 })); // true
console.log(isEqual([1, 3, 4, 5], [1, 3, 4, 5])); // true

console.log(isEqual([1, { xx: 1 }, 4, 5], [1, { yy: 1 }, 4, 5])); // false
console.log(isEqual([1, { xx: 1 }, 4, 5], [1, { xx: 1 }, 4, 5, '7'])); // false
console.log(isEqual([1, 3, 4, () => {}], [1, 3, 4, () => {}, { x: 2 }])); // false
console.log(
  isEqual(
    function() {
      console.log(2);
    },
    function() {
      console.log(2);
    }
  )
); // false

console.log(
  isEqual(
    () => {
      console.log(1);
    },
    () => {
      console.log(1);
    }
  )
); // false

// Constructor type examples
console.log(isEqual(new String(1), new String(1))); // true
console.log(isEqual(new Number(1), new Number(1))); // true
console.log(isEqual(new Boolean(true), new Boolean(true))); // true
console.log(isEqual(new Function('console.log(1)'), new Function('console.log(3333)'))); // false
console.log(isEqual(new RegExp('\\d+'), new RegExp('[a-z]+'))); // false
console.log(isEqual(new RegExp('\\s+'), new RegExp('\\s*'))); // false

// MAP type examples
const map1 = new Map();
map1.set('x', 1);
map1.set('y', 2);

const map2 = new Map();
map2.set('x', 1);
map2.set('y', 2);

const map3 = new Map();
map3.set('x', 1);
map3.set('y', 2);
map3.set('z', 3);

console.log(isEqual(new Map(), new Map())); // true
console.log(isEqual(map1, map2)); // true

console.log(isEqual(map1, map3)); // false
console.log(isEqual(map2, map3)); // false

// SET type examples
const set1 = new Set();
set1.add(1);
set1.add(2);

const set2 = new Set();
set2.add(1);
set2.add(2);

const set3 = new Set();
set3.add(1);
set3.add(2);
set3.add(33);

console.log(isEqual(set1, set2)); // true
console.log(isEqual(set1, set3)); // false
```

## isEqualAtStringFunction or isEqualAtStringSymbol API

Below code will be evaluated to a `false` by the javascript mechanism, but you may will be able to turn to a true via use those `apis` to use. 

```javascript
import { isEqual, isEqualAtStringFunction, isEqualAtStringSymbol } from 'emnida';

isEqual(() => {}, () => {}); // false
isEqual(Symbol(3), Symbol(3)); // false

isEqualAtStringFunction(() => {}, () => {}); // true
isEqualAtStringSymbol(Symbol(3), Symbol(3)); // true
```
