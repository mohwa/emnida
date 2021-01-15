// eslint-disable-next-line
import { isJSONObject } from '../../../lib/type';

describe('isJSONObject', () => {
  it('should be return true if array type', () => {
    // Given / When
    const result = isJSONObject('[]');
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if plain object', () => {
    // Given / When
    const result = isJSONObject('{}');
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
    const result = isJSONObject('0');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isJSONObject('true');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isJSONObject('null');
    // Then
    expect(result).toEqual(false);
  });
});
