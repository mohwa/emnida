// eslint-disable-next-line
import { isArrayLikeObject } from '../../../lib/type';

describe('isSymbol', () => {
  it('should be return true if like array type', () => {
    // Given / When
    const result = isArrayLikeObject([]);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if string type', () => {
    // Given / When
    const result = isArrayLikeObject('test');
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if function object', () => {
    // Given / When
    const result = isArrayLikeObject(() => {});
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if Map object', () => {
    // Given / When
    const result = isArrayLikeObject(new Map());
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if Set object', () => {
    // Given / When
    const result = isArrayLikeObject(new Set());
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isArrayLikeObject(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isArrayLikeObject(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isArrayLikeObject(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isArrayLikeObject(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if object type', () => {
    // Given / When
    const result = isArrayLikeObject({});
    // Then
    expect(result).toEqual(false);
  });
});
