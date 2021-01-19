// eslint-disable-next-line
import { isJSONPlainObjectString } from '../../../lib/type';

describe('isJSONPlainObjectString', () => {
  it('should be return true if plain object string', () => {
    // Given / When
    const result = isJSONPlainObjectString('{}');
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if string string', () => {
    // Given / When
    const result = isJSONPlainObjectString('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number string', () => {
    // Given / When
    const result = isJSONPlainObjectString('0');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean string', () => {
    // Given / When
    const result = isJSONPlainObjectString('true');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null string', () => {
    // Given / When
    const result = isJSONPlainObjectString('null');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if array string', () => {
    // Given / When
    const result = isJSONPlainObjectString('[]');
    // Then
    expect(result).toEqual(false);
  });
});
