// eslint-disable-next-line
import { isJSONArrayString } from '../../../lib/type';

describe('isJSONArrayString', () => {
  it('should be return true if array string', () => {
    // Given / When
    const result = isJSONArrayString('[]');
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if plain object string', () => {
    // Given / When
    const result = isJSONArrayString('{}');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if string', () => {
    // Given / When
    const result = isJSONArrayString('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number string', () => {
    // Given / When
    const result = isJSONArrayString('0');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean string', () => {
    // Given / When
    const result = isJSONArrayString('true');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null string', () => {
    // Given / When
    const result = isJSONArrayString('null');
    // Then
    expect(result).toEqual(false);
  });
});
