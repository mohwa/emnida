## Type check apis

These features will be use to check data type

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
 isObject,
 isJSONPlainObjectString,
 isJSONArrayString,
 isJSONObjectString,
} from 'emnida';

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

isJSONPlainObjectString('{ "x": "1", "y": 1, "z": true, "xx": null, "yy": {}, "zz": [] }'); // true
isJSONArrayString('["1", 1, true, null, {}, []]'); // true

isJSONObjectString('{ "x": "1", "y": 1, "z": true, "xx": null, "yy": {}, "zz": [] }'); // true
isJSONObjectString('["1", 1, true, null, {}, []]'); // true
```

## Special Type check apis

These features will be use in special cases like the DOM element or empty value check

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

## Number Type check apis

These features will be evaluates an arguments in the various cases of number type

```javascript
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
} from 'emnida';

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

## isEqual

This feature will be use to compare two arguments like the code follows

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

## isEqualAtStringFunction or isEqualAtStringSymbol

Below code will be evaluated to a `false` by the javascript mechanism, but you may will be able to turn to a `true` via use these features to use. 

```javascript
import { isEqual, isEqualAtStringFunction, isEqualAtStringSymbol } from 'emnida';

isEqual(() => {}, () => {}); // false
isEqual(Symbol(3), Symbol(3)); // false

isEqualAtStringFunction(() => {}, () => {}); // true
isEqualAtStringSymbol(Symbol(3), Symbol(3)); // true
```
