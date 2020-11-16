// eslint-disable-next-line
import { isEqual } from '../../../lib';

describe('isEqual', () => {
  it('should be return true when equal first argument and second argument of primitive type', () => {
    // Given / When
    const symbol = Symbol(3);

    const result1 = isEqual('1', '1');
    const result2 = isEqual(2, 2);
    const result3 = isEqual(true, true);
    const result4 = isEqual(undefined, undefined);
    const result5 = isEqual(null, null);
    const result6 = isEqual(symbol, symbol);
    const result7 = isEqual(10n, 10n);
    // Then
    expect(result1).toEqual(true);
    expect(result2).toEqual(true);
    expect(result3).toEqual(true);
    expect(result4).toEqual(true);
    expect(result5).toEqual(true);
    expect(result6).toEqual(true);
    expect(result7).toEqual(true);
  });

  it('should be return true when comparing complex an objects', () => {
    // Given / When
    const result1 = isEqual({ x: 2, y: 1 }, { y: 1, x: 2 });
    const result2 = isEqual({ x: 2, y: 1, z: '3' }, { x: 2, y: 1, z: '3' });
    const result3 = isEqual([1, 3, 4, 5], [1, 3, 4, 5]);
    const result4 = isEqual([1, { xx: 1 }, 4, 5], [1, { yy: 1 }, 4, 5]);
    // Then
    expect(result1).toEqual(true);
    expect(result2).toEqual(true);
    expect(result3).toEqual(true);
    expect(result4).toEqual(true);
  });

  it('should be return false when comparing complex an objects', () => {
    // Given / When
    const result1 = isEqual([1, { xx: 1 }, 4, 5], [1, { xx: 1 }, 4, 5, '7']);
    const result2 = isEqual([1, 3, 4, () => {}], [1, 3, 4, () => {}, { x: 2 }]);
    // Then
    expect(result1).toEqual(false);
    expect(result2).toEqual(false);
  });

  it('should be return false if comparing function to function', () => {
    // Given / When
    const result1 = isEqual(
      function() {
        console.log(2);
      },
      function() {
        console.log(2);
      }
    );
    const result2 = isEqual(
      () => {
        console.log(1);
      },
      () => {
        console.log(1);
      }
    );
    // Then
    expect(result1).toEqual(false);
    expect(result2).toEqual(false);
  });

  it('should be return true or false when comparing value that made by the constructor', () => {
    // Given / When
    const result1 = isEqual(String(1), String(1));
    const result2 = isEqual(Number(1), Number(1));
    const result3 = isEqual(Boolean(true), Boolean(true));

    const result4 = isEqual(new Function('console.log(1)'), new Function('console.log(1)'));
    const result5 = isEqual(new Function('console.log(1)'), new Function('console.log(3333)'));

    const result6 = isEqual(new RegExp('\\d+'), new RegExp('\\d+'));
    const result7 = isEqual(new RegExp('\\d+'), new RegExp('[a-z]+'));

    const result8 = isEqual(new RegExp('\\s+'), new RegExp('\\s+'));
    const result9 = isEqual(new RegExp('\\s+'), new RegExp('\\s*'));
    // Then
    expect(result1).toEqual(true);
    expect(result2).toEqual(true);
    expect(result3).toEqual(true);
    expect(result4).toEqual(false);
    expect(result5).toEqual(false);
    expect(result6).toEqual(true);
    expect(result7).toEqual(false);
    expect(result8).toEqual(true);
    expect(result9).toEqual(false);
  });

  it('should be return true or false if Map object type', () => {
    // Given
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
    // When
    const result1 = isEqual(new Map(), new Map());
    const result2 = isEqual(m1, m2);

    const result3 = isEqual(m1, m3);
    const result4 = isEqual(m2, m3);
    // Then
    expect(result1).toEqual(true);
    expect(result2).toEqual(true);

    expect(result3).toEqual(false);
    expect(result4).toEqual(false);
  });

  it('should be return true or false if Set object type', () => {
    // Given
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
    // When
    const result1 = isEqual(s1, s2);
    const result2 = isEqual(s1, s3);
    // Then
    expect(result1).toEqual(true);
    expect(result2).toEqual(false);
  });

  it('should be return true or false if URL type', () => {
    // Given
    const url1 = new URL('https://javascript.info/profile/admin');
    const url2 = new URL('https://javascript.info/profile/admin');
    const url3 = new URL('https://javascript.info/profile/admin-1');
    // When
    const result1 = isEqual(url1, url2);
    const result2 = isEqual(url1, url3);
    // Then
    expect(result1).toEqual(true);
    expect(result2).toEqual(false);
  });
});
