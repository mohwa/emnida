# emnida

![npm](https://img.shields.io/npm/v/emnida) [![](https://data.jsdelivr.com/v1/package/npm/emnida/badge)](https://www.jsdelivr.com/package/npm/emnida) ![npm bundle size](https://img.shields.io/bundlephobia/min/emnida) ![npm](https://img.shields.io/npm/dm/emnida) ![NPM](https://img.shields.io/npm/l/emnida)

The emnida library will be used when the check a data type or compare an any value

# Install

```javascript
npm i emnida
```

# Support Platforms

IE9 later, All modern browsers(Chrome, Safari, Edge ...), NodeJS(`10.0.0` version later).


# How to Use

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
  isJSONPlainObjectString,
  isJSONArrayString,
  isJSONObjectString,
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

isJSONPlainObjectString('{ "x": "1", "y": 1, "z": true, "xx": null, "yy": {}, "zz": [] }'); // true
isJSONArrayString('["1", 1, true, null, {}, []]'); // true

isJSONObjectString('{ "x": "1", "y": 1, "z": true, "xx": null, "yy": {}, "zz": [] }'); // true
isJSONObjectString('["1", 1, true, null, {}, []]'); // true
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

## Functions

<dl>
<dt><a href="#isEqual">isEqual(v, vv)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether equal first argument and second argument</p>
</dd>
<dt><a href="#isEqualAtStringFunction">isEqualAtStringFunction(v, vv)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether equal first function and second function casted as string</p>
</dd>
<dt><a href="#isEqualAtStringSymbol">isEqualAtStringSymbol(v, vv)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether equal first symbol and second symbol casted as string</p>
</dd>
<dt><a href="#isString">isString(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is string type</p>
</dd>
<dt><a href="#isNumber">isNumber(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is number type</p>
</dd>
<dt><a href="#isBoolean">isBoolean(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is boolean type</p>
</dd>
<dt><a href="#isUndefined">isUndefined(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is undefined</p>
</dd>
<dt><a href="#isDefined">isDefined(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is defined</p>
</dd>
<dt><a href="#isNull">isNull(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is null</p>
</dd>
<dt><a href="#isSymbol">isSymbol(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is symbol type</p>
</dd>
<dt><a href="#isBigInt">isBigInt(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is bigint type</p>
</dd>
<dt><a href="#isFunction">isFunction(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is function type</p>
</dd>
<dt><a href="#isObject">isObject(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is object type</p>
</dd>
<dt><a href="#isObjectNotIncludeNull">isObjectNotIncludeNull(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is object type not included null</p>
</dd>
<dt><a href="#isPlainObject">isPlainObject(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is plain object</p>
</dd>
<dt><a href="#isArray">isArray(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is array type</p>
</dd>
<dt><a href="#isRegExp">isRegExp(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is regex</p>
</dd>
<dt><a href="#isElement">isElement(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is element</p>
</dd>
<dt><a href="#isDate">isDate(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is date</p>
</dd>
<dt><a href="#isArrayLikeObject">isArrayLikeObject(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is array like object</p>
</dd>
<dt><a href="#isIterableObject">isIterableObject(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is iterable object</p>
</dd>
<dt><a href="#isMap">isMap(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is Map</p>
</dd>
<dt><a href="#isSet">isSet(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is Set</p>
</dd>
<dt><a href="#isWeakMap">isWeakMap(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is WeakMap</p>
</dd>
<dt><a href="#isWeakSet">isWeakSet(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is WeakSet</p>
</dd>
<dt><a href="#isPrimitive">isPrimitive(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is primitive type</p>
</dd>
<dt><a href="#isEmpty">isEmpty(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is empty</p>
</dd>
<dt><a href="#isJSONPlainObjectString">isJSONPlainObjectString(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is json plain object string</p>
</dd>
<dt><a href="#isJSONArrayString">isJSONArrayString(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is json array string</p>
</dd>
<dt><a href="#isJSONObjectString">isJSONObjectString(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is json plain object string or json array string</p>
</dd>
<dt><a href="#isFloat">isFloat(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is floating point number</p>
</dd>
<dt><a href="#isFinite">isFinite(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is finite number</p>
</dd>
<dt><a href="#isInfinite">isInfinite(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is infinite number</p>
</dd>
<dt><a href="#isNaN">isNaN(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is not a number</p>
</dd>
<dt><a href="#isGreater">isGreater(v, vv)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether first argument is greater</p>
</dd>
<dt><a href="#isGreaterOrEqual">isGreaterOrEqual(v, vv)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether first argument is greater or equal</p>
</dd>
<dt><a href="#isLess">isLess(v, vv)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether first argument is less</p>
</dd>
<dt><a href="#isLessOrEqual">isLessOrEqual(v, vv)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether first argument is less or equal</p>
</dd>
<dt><a href="#isZero">isZero(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is zero</p>
</dd>
<dt><a href="#isInteger">isInteger(v)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is integer</p>
</dd>
</dl>

<a name="isEqual"></a>

## isEqual(v, vv) ⇒ <code>boolean</code>
This function evaluates whether equal first argument and second argument

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value which will be compared |
| vv | <code>\*</code> | An any value which will be compared |

**Example**  
```js
isEqual(1, 1); // true
```
<a name="isEqualAtStringFunction"></a>

## isEqualAtStringFunction(v, vv) ⇒ <code>boolean</code>
This function evaluates whether equal first function and second function casted as string

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>function</code> | A function which will be compared |
| vv | <code>function</code> | A function which will be compared |

**Example**  
```js
isEqualAtStringFunction(function() {}, function() {}); // true
```
<a name="isEqualAtStringSymbol"></a>

## isEqualAtStringSymbol(v, vv) ⇒ <code>boolean</code>
This function evaluates whether equal first symbol and second symbol casted as string

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Symbol</code> | A symbol which will be compared |
| vv | <code>Symbol</code> | A symbol which will be compared |

**Example**  
```js
isEqualAtStringSymbol(Symbol(1), Symbol(1)); // true
```
<a name="isString"></a>

## isString(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is string type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isString('test'); // true
```
<a name="isNumber"></a>

## isNumber(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is number type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isNumber(1); // true
```
<a name="isBoolean"></a>

## isBoolean(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is boolean type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isBoolean(true); // true
```
<a name="isUndefined"></a>

## isUndefined(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is undefined

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isUndefined(undefined); // true
```
<a name="isDefined"></a>

## isDefined(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is defined

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isDefined(undefined); // false
```
<a name="isNull"></a>

## isNull(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is null

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isNull(null); // true
```
<a name="isSymbol"></a>

## isSymbol(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is symbol type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isSymbol(Symbol(1)); // true
```
<a name="isBigInt"></a>

## isBigInt(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is bigint type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isBigInt(10n); // true
```
<a name="isFunction"></a>

## isFunction(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is function type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isFunction(function(){}); // true
```
<a name="isObject"></a>

## isObject(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is object type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isObject(null); // true
```
<a name="isObjectNotIncludeNull"></a>

## isObjectNotIncludeNull(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is object type not included null

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isObject(null); // false
```
<a name="isPlainObject"></a>

## isPlainObject(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is plain object

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isPlainObject({}); // true
```
<a name="isArray"></a>

## isArray(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is array type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isArray([]); // true
```
<a name="isRegExp"></a>

## isRegExp(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is regex

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isRegExp(new RegExp('\s+')); // true
```
<a name="isElement"></a>

## isElement(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is element

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isElement(document.documentElement); // true
```
<a name="isDate"></a>

## isDate(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is date

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isDate(new Date()); // true
```
<a name="isArrayLikeObject"></a>

## isArrayLikeObject(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is array like object

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isArrayLikeObject([]); // true
```
<a name="isIterableObject"></a>

## isIterableObject(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is iterable object

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isIterableObject([]); // true
```
<a name="isMap"></a>

## isMap(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is Map

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isMap(new Map()); // true
```
<a name="isSet"></a>

## isSet(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is Set

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isSet(new Set()); // true
```
<a name="isWeakMap"></a>

## isWeakMap(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is WeakMap

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isWeakMap(new WeakMap()); // true
```
<a name="isWeakSet"></a>

## isWeakSet(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is WeakSet

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isWeakSet(new WeakSet()); // true
```
<a name="isPrimitive"></a>

## isPrimitive(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is primitive type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isPrimitive('test'); // true
```
<a name="isEmpty"></a>

## isEmpty(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is empty

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isEmpty(1); // true
```
<a name="isJSONPlainObjectString"></a>

## isJSONPlainObjectString(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is json plain object string

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isJSONPlainObjectString('{ "x": 1 }'); // true
```
<a name="isJSONArrayString"></a>

## isJSONArrayString(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is json array string

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isJSONArrayString('[1]'); // true
```
<a name="isJSONObjectString"></a>

## isJSONObjectString(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is json plain object string or json array string

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isJSONObjectString('{ "x": 1 }'); // true
```
<a name="isFloat"></a>

## isFloat(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is floating point number

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isFloat(1.1); // true
```
<a name="isFinite"></a>

## isFinite(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is finite number

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isFinite(1); // true
```
<a name="isInfinite"></a>

## isInfinite(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is infinite number

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isInfinite(null); // true
```
<a name="isNaN"></a>

## isNaN(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is not a number

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isNaN(NaN); // true
```
<a name="isGreater"></a>

## isGreater(v, vv) ⇒ <code>boolean</code>
This function evaluates whether first argument is greater

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value which will be compared |
| vv | <code>\*</code> | An any value which will be compared |

**Example**  
```js
isGreater(10, 1); // true
```
<a name="isGreaterOrEqual"></a>

## isGreaterOrEqual(v, vv) ⇒ <code>boolean</code>
This function evaluates whether first argument is greater or equal

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value which will be compared |
| vv | <code>\*</code> | An any value which will be compared |

**Example**  
```js
isGreaterOrEqual(10, 10); // true
```
<a name="isLess"></a>

## isLess(v, vv) ⇒ <code>boolean</code>
This function evaluates whether first argument is less

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value which will be compared |
| vv | <code>\*</code> | An any value which will be compared |

**Example**  
```js
isLess(1, 10); // true
```
<a name="isLessOrEqual"></a>

## isLessOrEqual(v, vv) ⇒ <code>boolean</code>
This function evaluates whether first argument is less or equal

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value which will be compared |
| vv | <code>\*</code> | An any value which will be compared |

**Example**  
```js
isLessOrEqual(10, 10); // true
```
<a name="isZero"></a>

## isZero(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is zero

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isZero(0); // true
```
<a name="isInteger"></a>

## isInteger(v) ⇒ <code>boolean</code>
This function evaluates whether an arguments is integer

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value |

**Example**  
```js
isInteger(1); // true
```


