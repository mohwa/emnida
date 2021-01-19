// eslint-disable-next-line
import { isJSONObjectString } from '../../../lib/type';

describe('isJSONObjectString', () => {
  it('should be return true if array string', () => {
    // Given / When
    const result = isJSONObjectString('[]');
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if plain object string', () => {
    // Given / When
    const result = isJSONObjectString('{}');
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if string string', () => {
    // Given / When
    const result = isJSONObjectString('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number string', () => {
    // Given / When
    const result = isJSONObjectString('0');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean string', () => {
    // Given / When
    const result = isJSONObjectString('true');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null string', () => {
    // Given / When
    const result = isJSONObjectString('null');
    // Then
    expect(result).toEqual(false);
  });
});
