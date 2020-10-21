// eslint-disable-next-line
import { isIterableObject } from '../../../lib/type';

describe('isIterableObject', () => {
  it('should be return true if iterable object type', () => {
    // Given / When
    const result = isIterableObject([]);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if string type', () => {
    // Given / When
    const result = isIterableObject('test');
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if function object', () => {
    // Given / When
    const result = isIterableObject(() => {});
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isIterableObject(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isIterableObject(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isIterableObject(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isIterableObject(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isIterableObject(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if object type', () => {
    // Given / When
    const result = isIterableObject({});
    // Then
    expect(result).toEqual(false);
  });
});
