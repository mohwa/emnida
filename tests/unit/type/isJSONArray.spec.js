// eslint-disable-next-line
import { isJSONArray } from '../../../lib/type';

describe('isJSONArray', () => {
  it('should be return true if array type', () => {
    // Given / When
    const result = isJSONArray([]);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if plain object', () => {
    // Given / When
    const result = isJSONArray({});
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result = isJSONArray('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isJSONArray(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isJSONArray(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isJSONArray(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isJSONArray(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if function type', () => {
    // Given / When
    const result = isJSONArray(function() {});
    // Then
    expect(result).toEqual(false);
  });

  it('should be return true if null type', () => {
    // Given / When
    const result = isJSONArray(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return true if Map object', () => {
    // Given / When
    const result = isJSONArray(new Map());
    // Then
    expect(result).toEqual(false);
  });

  it('should be return true if Set object', () => {
    // Given / When
    const result = isJSONArray(new Set());
    // Then
    expect(result).toEqual(false);
  });

  it('should be return true if generator iterable object', () => {
    // Given / When
    const result = isJSONArray((function*() {})());
    // Then
    expect(result).toEqual(false);
  });
});
