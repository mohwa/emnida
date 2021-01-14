// eslint-disable-next-line
import { isJSONPlainObject } from '../../../lib/type';

describe('isJSONPlainObject', () => {
  it('should be return true if plain object', () => {
    // Given / When
    const result = isJSONPlainObject({});
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result = isJSONPlainObject('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isJSONPlainObject(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isJSONPlainObject(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isJSONPlainObject(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isJSONPlainObject(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if function type', () => {
    // Given / When
    const result = isJSONPlainObject(function() {});
    // Then
    expect(result).toEqual(false);
  });

  it('should be return true if null type', () => {
    // Given / When
    const result = isJSONPlainObject(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return true if array type', () => {
    // Given / When
    const result = isJSONPlainObject([]);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return true if Map object', () => {
    // Given / When
    const result = isJSONPlainObject(new Map());
    // Then
    expect(result).toEqual(false);
  });

  it('should be return true if Set object', () => {
    // Given / When
    const result = isJSONPlainObject(new Set());
    // Then
    expect(result).toEqual(false);
  });

  it('should be return true if generator iterable object', () => {
    // Given / When
    const result = isJSONPlainObject((function*() {})());
    // Then
    expect(result).toEqual(false);
  });
});
