import emnida, { isEqual } from '../lib';

console.log(emnida);
console.log(isEqual({ x: 2, y: 1 }, { y: 1, x: 2 }));
console.log(isEqual([1, 3, 4, 5], [1, 3, 33]));
console.log(isEqual([1, { xx: 1 }, 4, 5], [1, { xx: 1 }, 4, 5]));
console.log(isEqual([1, 3, 4, 5], [1, 3, 4, 5]));
// console.log(isEqual({ x: 2 }, { x: 1 }));
