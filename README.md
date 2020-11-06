# emnida.js

emnida library will be using when a type and a value compare in javascript

# Install

```javascript
npm i emnida
```

# Support Platforms

IE9 later, All modern browsers(Chrome, Safari, Edge ...), NodeJS(`10.0.0` version later).

## Normal Type API

These apis will use to check normal type like the code follows

```javascript
import {
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
} from 'emnida';

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
```

## Special Type API

These apis will use to check in the special cases like the DOM element or empty value ...

```javascript
import { isArrayLikeObject, isElement, isEmpty, isIterableObject, isPrimitive } from 'emnida';

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

## isEqual API

This api will use to compare two value like the code follows

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

// URL type examples
const url1 = new URL('https://javascript.info/profile/admin');
const url2 = new URL('https://javascript.info/profile/admin');
const url3 = new URL('https://javascript.info/profile/admin-1');

console.log(isEqual(url1, url2)); // true
console.log(isEqual(url1, url3)); // false
```
