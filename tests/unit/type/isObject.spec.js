// eslint-disable-next-line
import { isObject } from '../../../lib/type';

describe('isObject', () => {
  it('should be return false if string type', () => {
    // Given / When
    const result = isObject('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isObject(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isObject(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isObject(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isObject(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if function type', () => {
    // Given / When
    const result = isObject(function() {});
    // Then
    expect(result).toEqual(false);
  });

  it('should be return true if null type', () => {
    // Given / When
    const result = isObject(null);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if plain object', () => {
    // Given / When
    const result = isObject({});
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if array type', () => {
    // Given / When
    const result = isObject([]);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if Map object', () => {
    // Given / When
    const result = isObject(new Map());
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if Set object', () => {
    // Given / When
    const result = isObject(new Set());
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if generator iterable object', () => {
    // Given / When
    const result = isObject((function*() {})());
    // Then
    expect(result).toEqual(true);
  });
});
