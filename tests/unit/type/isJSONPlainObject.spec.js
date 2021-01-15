// eslint-disable-next-line
import { isJSONPlainObject } from '../../../lib/type';

describe('isJSONPlainObject', () => {
  it('should be return true if plain object', () => {
    // Given / When
    const result = isJSONPlainObject('{}');
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
    const result = isJSONPlainObject('0');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isJSONPlainObject('true');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isJSONPlainObject('null');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if array type', () => {
    // Given / When
    const result = isJSONPlainObject('[]');
    // Then
    expect(result).toEqual(false);
  });
});
