# emnida

emnida library will be able to using when a type and a value compare in javascript

# Install

```javascript
npm i emnida
```

# Support Platforms

IE9 later, All modern browsers(Chrome, Safari, Edge ...), NodeJS(`10.0.0` version later).

## Type API

```javascript
import { isArray } from 'emnida';
```

## isEqual API

```javascript
import { isEqual } from 'emnida';

// Primitive type examples
console.log(isEqual('1', '1')); // true
console.log(isEqual(2, 2)); // true
console.log(isEqual(true, true)); // true

console.log(isEqual(undefined, null)); // false
console.log(isEqual(null, '')); // false
console.log(isEqual(Symbol(3), false)); // false

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
); // true

console.log(
  isEqual(
    () => {
      console.log(1);
    },
    () => {
      console.log(1);
    }
  )
); // true

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
