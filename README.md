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

## Functions

<dl>
<dt><a href="#isString">isString(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is string type</p>
</dd>
<dt><a href="#isNumber">isNumber(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is number type</p>
</dd>
<dt><a href="#isBoolean">isBoolean(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is boolean type</p>
</dd>
<dt><a href="#isUndefined">isUndefined(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is undefined</p>
</dd>
<dt><a href="#isDefined">isDefined(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is defined</p>
</dd>
<dt><a href="#isNull">isNull(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is null</p>
</dd>
<dt><a href="#isSymbol">isSymbol(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is symbol type</p>
</dd>
<dt><a href="#isBigInt">isBigInt(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is bigint type</p>
</dd>
<dt><a href="#isFunction">isFunction(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is function type</p>
</dd>
<dt><a href="#isObject">isObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is object type</p>
</dd>
<dt><a href="#isObjectNotIncludeNull">isObjectNotIncludeNull(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is object type not included null</p>
</dd>
<dt><a href="#isPlainObject">isPlainObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is plain object</p>
</dd>
<dt><a href="#isArray">isArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is array type</p>
</dd>
<dt><a href="#isRegExp">isRegExp(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is regex</p>
</dd>
<dt><a href="#isElement">isElement(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is element</p>
</dd>
<dt><a href="#isDate">isDate(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is date</p>
</dd>
<dt><a href="#isArrayLikeObject">isArrayLikeObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is array like object</p>
</dd>
<dt><a href="#isIterableObject">isIterableObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is iterable object</p>
</dd>
<dt><a href="#isMap">isMap(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is Map</p>
</dd>
<dt><a href="#isSet">isSet(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is Set</p>
</dd>
<dt><a href="#isWeakMap">isWeakMap(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is WeakMap</p>
</dd>
<dt><a href="#isWeakSet">isWeakSet(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is WeakSet</p>
</dd>
<dt><a href="#isPrimitive">isPrimitive(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is primitive type</p>
</dd>
<dt><a href="#isEmpty">isEmpty(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is empty</p>
</dd>
<dt><a href="#isJSONPlainObjectString">isJSONPlainObjectString(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is json plain object string</p>
</dd>
<dt><a href="#isJSONArrayString">isJSONArrayString(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is json array string</p>
</dd>
<dt><a href="#isJSONObjectString">isJSONObjectString(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is json plain object string or json array string</p>
</dd>
<dt><a href="#isFloat">isFloat(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is floating point number</p>
</dd>
<dt><a href="#isFinite">isFinite(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is finite number</p>
</dd>
<dt><a href="#isInfinite">isInfinite(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is infinite number</p>
</dd>
<dt><a href="#isNaN">isNaN(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is not a number</p>
</dd>
<dt><a href="#isGreater">isGreater(value, comparisonValue)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether first argument is greater</p>
</dd>
<dt><a href="#isGreaterOrEqual">isGreaterOrEqual(value, comparisonValue)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether first argument is greater or equal</p>
</dd>
<dt><a href="#isLess">isLess(value, comparisonValue)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether first argument is less</p>
</dd>
<dt><a href="#isLessOrEqual">isLessOrEqual(value, comparisonValue)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether first argument is less or equal</p>
</dd>
<dt><a href="#isZero">isZero(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is zero</p>
</dd>
<dt><a href="#isInteger">isInteger(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether an arguments is integer</p>
</dd>
<dt><a href="#isEqual">isEqual(value, comparisonValue)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether equal first argument and second argument</p>
</dd>
<dt><a href="#isEqualAtStringFunction">isEqualAtStringFunction(value, comparisonValue)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether equal first function and second function casted as string</p>
</dd>
<dt><a href="#isEqualAtStringSymbol">isEqualAtStringSymbol(value, comparisonValue)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether equal first symbol and second symbol casted as string</p>
</dd>
</dl>

<a name="isString"></a>

## isString(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is string type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isString('test'); // true
```
<a name="isNumber"></a>

## isNumber(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is number type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isNumber(1); // true
```
<a name="isBoolean"></a>

## isBoolean(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is boolean type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isBoolean(true); // true
```
<a name="isUndefined"></a>

## isUndefined(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is undefined

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isUndefined(undefined); // true
```
<a name="isDefined"></a>

## isDefined(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is defined

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isDefined(undefined); // false
```
<a name="isNull"></a>

## isNull(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is null

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isNull(null); // true
```
<a name="isSymbol"></a>

## isSymbol(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is symbol type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isSymbol(Symbol(1)); // true
```
<a name="isBigInt"></a>

## isBigInt(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is bigint type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isBigInt(10n); // true
```
<a name="isFunction"></a>

## isFunction(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is function type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isFunction(function(){}); // true
```
<a name="isObject"></a>

## isObject(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is object type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isObject(null); // true
```
<a name="isObjectNotIncludeNull"></a>

## isObjectNotIncludeNull(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is object type not included null

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isObject(null); // false
```
<a name="isPlainObject"></a>

## isPlainObject(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is plain object

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isPlainObject({}); // true
```
<a name="isArray"></a>

## isArray(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is array type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isArray([]); // true
```
<a name="isRegExp"></a>

## isRegExp(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is regex

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isRegExp(new RegExp('\s+')); // true
```
<a name="isElement"></a>

## isElement(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is element

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isElement(document.documentElement); // true
```
<a name="isDate"></a>

## isDate(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is date

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isDate(new Date()); // true
```
<a name="isArrayLikeObject"></a>

## isArrayLikeObject(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is array like object

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isArrayLikeObject([]); // true
```
<a name="isIterableObject"></a>

## isIterableObject(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is iterable object

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isIterableObject([]); // true
```
<a name="isMap"></a>

## isMap(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is Map

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isMap(new Map()); // true
```
<a name="isSet"></a>

## isSet(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is Set

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isSet(new Set()); // true
```
<a name="isWeakMap"></a>

## isWeakMap(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is WeakMap

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isWeakMap(new WeakMap()); // true
```
<a name="isWeakSet"></a>

## isWeakSet(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is WeakSet

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isWeakSet(new WeakSet()); // true
```
<a name="isPrimitive"></a>

## isPrimitive(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is primitive type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isPrimitive('test'); // true
```
<a name="isEmpty"></a>

## isEmpty(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is empty

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isEmpty(1); // true
```
<a name="isJSONPlainObjectString"></a>

## isJSONPlainObjectString(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is json plain object string

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isJSONPlainObjectString('{ "x": 1 }'); // true
```
<a name="isJSONArrayString"></a>

## isJSONArrayString(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is json array string

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isJSONArrayString('[1]'); // true
```
<a name="isJSONObjectString"></a>

## isJSONObjectString(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is json plain object string or json array string

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isJSONObjectString('{ "x": 1 }'); // true
```
<a name="isFloat"></a>

## isFloat(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is floating point number

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isFloat(1.1); // true
```
<a name="isFinite"></a>

## isFinite(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is finite number

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isFinite(1); // true
```
<a name="isInfinite"></a>

## isInfinite(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is infinite number

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isInfinite(null); // true
```
<a name="isNaN"></a>

## isNaN(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is not a number

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isNaN(NaN); // true
```
<a name="isGreater"></a>

## isGreater(value, comparisonValue) ⇒ <code>boolean</code>
This function evaluates whether first argument is greater

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value which will be compared |
| comparisonValue | <code>\*</code> | An any value which will be compared |

**Example**  
```js
isGreater(10, 1); // true
```
<a name="isGreaterOrEqual"></a>

## isGreaterOrEqual(value, comparisonValue) ⇒ <code>boolean</code>
This function evaluates whether first argument is greater or equal

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value which will be compared |
| comparisonValue | <code>\*</code> | An any value which will be compared |

**Example**  
```js
isGreaterOrEqual(10, 10); // true
```
<a name="isLess"></a>

## isLess(value, comparisonValue) ⇒ <code>boolean</code>
This function evaluates whether first argument is less

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value which will be compared |
| comparisonValue | <code>\*</code> | An any value which will be compared |

**Example**  
```js
isLess(1, 10); // true
```
<a name="isLessOrEqual"></a>

## isLessOrEqual(value, comparisonValue) ⇒ <code>boolean</code>
This function evaluates whether first argument is less or equal

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value which will be compared |
| comparisonValue | <code>\*</code> | An any value which will be compared |

**Example**  
```js
isLessOrEqual(10, 10); // true
```
<a name="isZero"></a>

## isZero(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is zero

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isZero(0); // true
```
<a name="isInteger"></a>

## isInteger(value) ⇒ <code>boolean</code>
This function evaluates whether an arguments is integer

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value |

**Example**  
```js
isInteger(1); // true
```
<a name="isEqual"></a>

## isEqual(value, comparisonValue) ⇒ <code>boolean</code>
This function evaluates whether equal first argument and second argument

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | An any value which will be compared |
| comparisonValue | <code>\*</code> | An any value which will be compared |

**Example**  
```js
isEqual(1, 1); // true
```
<a name="isEqualAtStringFunction"></a>

## isEqualAtStringFunction(value, comparisonValue) ⇒ <code>boolean</code>
This function evaluates whether equal first function and second function casted as string

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | A function which will be compared |
| comparisonValue | <code>function</code> | A function which will be compared |

**Example**  
```js
isEqualAtStringFunction(function() {}, function() {}); // true
```
<a name="isEqualAtStringSymbol"></a>

## isEqualAtStringSymbol(value, comparisonValue) ⇒ <code>boolean</code>
This function evaluates whether equal first symbol and second symbol casted as string

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Symbol</code> | A symbol which will be compared |
| comparisonValue | <code>Symbol</code> | A symbol which will be compared |

**Example**  
```js
isEqualAtStringSymbol(Symbol(1), Symbol(1)); // true
```


