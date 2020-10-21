// eslint-disable-next-line
import { isPlainObject } from '../../../lib/type';

describe('isPlainObject', () => {
  it('should be return true if plain object', () => {
    // Given / When
    const result = isPlainObject({});
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result = isPlainObject('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isPlainObject(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isPlainObject(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isPlainObject(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isPlainObject(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isPlainObject(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if function object', () => {
    // Given / When
    const result = isPlainObject(() => {});
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if array object', () => {
    // Given / When
    const result = isPlainObject([]);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if map object', () => {
    // Given / When
    const result = isPlainObject(new Map());
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if set object', () => {
    // Given / When
    const result = isPlainObject(new Set());
    // Then
    expect(result).toEqual(false);
  });
});
