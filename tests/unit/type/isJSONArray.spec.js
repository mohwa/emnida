// eslint-disable-next-line
import { isJSONArray } from '../../../lib/type';

describe('isJSONArray', () => {
  it('should be return true if array type', () => {
    // Given / When
    const result = isJSONArray('[]');
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if plain object', () => {
    // Given / When
    const result = isJSONArray('{}');
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
    const result = isJSONArray('0');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isJSONArray('true');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isJSONArray('null');
    // Then
    expect(result).toEqual(false);
  });
});
