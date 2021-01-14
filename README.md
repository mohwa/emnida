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

isString('test'); // true
isNumber(1); // true
isBoolean(true); // true
isNull(null); // true
isUndefined(undefined); // true
isSymbol(Symbol(1)); // true
isBigInt(10n); // true

isPlainObject({}); // true
isArray([]); // true
isFunction(() => {}); // true

isMap(new Map()); // true
isWeakMap(new WeakMap()); // true

isSet(new Set())); // true
isWeakSet(new WeakSet()); // true

isDate(new Date()); // true
isRegExp(new RegExp('\\s+')); // true

isObject([]); // true
```

## Special Type API

These apis will be able to use in the special cases like the DOM element or empty value check.

```javascript
import { type } from 'emnida';

const { isArrayLikeObject, isElement, isEmpty, isIterableObject, isPrimitive } = type;

isPrimitive('test'); // true
isPrimitive(1); // true
isPrimitive(true); // true
isPrimitive(null); // true
isPrimitive(undefined); // true
isPrimitive(Symbol(1)); // true
isPrimitive(10n); // true

isElement(document.documentElement); // true
isArrayLikeObject('test'); // true

isEmpty(null); // true
isIterableObject([]); // true
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
isEqual('1', '1'); // true
isEqual(2, 2); // true
isEqual(true, true); // true

isEqual(undefined, null); // false
isEqual(null, ''); // false
isEqual(Symbol(3), Symbol(3)); // false

// Object type examples
isEqual({ x: 2, y: 1 }, { y: 1, x: 2 }); // true
isEqual({ x: 2, y: 1 }, { x: 2, y: 1 }); // true
isEqual([1, 3, 4, 5], [1, 3, 4, 5]); // true

isEqual([1, { xx: 1 }, 4, 5], [1, { yy: 1 }, 4, 5]); // false
isEqual([1, { xx: 1 }, 4, 5], [1, { xx: 1 }, 4, 5, '7']); // false
isEqual([1, 3, 4, () => {}], [1, 3, 4, () => {}, { x: 2 }]); // false

isEqual(
  function() {
    console.log(2);
  },
  function() {
    console.log(2);
  }
); // false


isEqual(
  () => {
    console.log(1);
  },
  () => {
    console.log(1);
  }
); // false

// Constructor type examples
isEqual(new String(1), new String(1)); // true
isEqual(new Number(1), new Number(1)); // true
isEqual(new Boolean(true), new Boolean(true)); // true
isEqual(new Function('1)'), new Function('3333)')); // false
isEqual(new RegExp('\\d+'), new RegExp('[a-z]+')); // false
isEqual(new RegExp('\\s+'), new RegExp('\\s*')); // false

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

isEqual(new Map(), new Map()); // true
isEqual(map1, map2); // true

isEqual(map1, map3); // false
isEqual(map2, map3); // false

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

isEqual(set1, set2); // true
isEqual(set1, set3); // false
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
