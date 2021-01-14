// eslint-disable-next-line
import { isJSONObject } from '../../../lib/type';

describe('isJSONObject', () => {
  it('should be return true if array type', () => {
    // Given / When
    const result = isJSONObject([]);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if plain object', () => {
    // Given / When
    const result = isJSONObject({});
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result = isJSONObject('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isJSONObject(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isJSONObject(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isJSONObject(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isJSONObject(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if function type', () => {
    // Given / When
    const result = isJSONObject(function() {});
    // Then
    expect(result).toEqual(false);
  });

  it('should be return true if null type', () => {
    // Given / When
    const result = isJSONObject(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return true if Map object', () => {
    // Given / When
    const result = isJSONObject(new Map());
    // Then
    expect(result).toEqual(false);
  });

  it('should be return true if Set object', () => {
    // Given / When
    const result = isJSONObject(new Set());
    // Then
    expect(result).toEqual(false);
  });

  it('should be return true if generator iterable object', () => {
    // Given / When
    const result = isJSONObject((function*() {})());
    // Then
    expect(result).toEqual(false);
  });
});
