import { isEqual } from '../lib';
import { isFunction } from '../lib/type';
import { getGlobalObject } from '../lib/_utils';

const globalObject = getGlobalObject();

console.log('PRIMITIVE');

console.log(isEqual('1', '1'));
console.log(isEqual(2, 2));
console.log(isEqual(true, true));

console.log(isEqual(undefined, null));
console.log(isEqual(null, ''));

if (isFunction(globalObject?.Symbol)) {
  console.log(isEqual(Symbol(3), false));
}

console.log('OBJECT');

console.log(isEqual({ x: 2, y: 1 }, { y: 1, x: 2 }));
console.log(isEqual({ x: 2, y: 1 }, { x: 2, y: 1 }));
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

console.log('CONSTRUCTOR');

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

  console.log('MAP');

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

  console.log('SET');
  console.log(isEqual(s1, s2));
  console.log(isEqual(s1, s3));
}

if (isFunction(globalObject?.URL)) {
  const url1 = new URL('https://javascript.info/profile/admin');
  const url2 = new URL('https://javascript.info/profile/admin');
  const url3 = new URL('https://javascript.info/profile/admin-1');

  console.log('URL');
  console.log(isEqual(url1, url2));
  console.log(isEqual(url1, url3));
}
