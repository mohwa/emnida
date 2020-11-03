// eslint-disable-next-line
import { isPrimitive } from '../../../lib/type';

describe('isPrimitive', () => {
  it('should be return false if string type', () => {
    // Given / When
    const result = isPrimitive('test');
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isPrimitive(0);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isPrimitive(true);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isPrimitive(null);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isPrimitive(undefined);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isPrimitive(Symbol(1));
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if bigInt type', () => {
    // Given / When
    const result = isPrimitive(100n);
    // Then
    expect(result).toEqual(true);
  });
});
