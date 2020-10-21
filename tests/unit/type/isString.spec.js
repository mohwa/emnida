// eslint-disable-next-line
import { isString } from '../../../lib/type';

describe('isString', () => {
  it('should be return true if string type', () => {
    // Given / When
    const result = isString('test');
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isString(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isString(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isString(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isString(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isString(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if object type', () => {
    // Given / When
    const result = isString({});
    // Then
    expect(result).toEqual(false);
  });
});
