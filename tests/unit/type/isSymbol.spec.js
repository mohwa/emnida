// eslint-disable-next-line
import { isSymbol } from '../../../lib/type';

describe('isSymbol', () => {
  it('should be return true if symbol type', () => {
    // Given / When
    const result = isSymbol(Symbol(1));
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result = isSymbol('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isSymbol(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isSymbol(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isSymbol(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isSymbol(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if object type', () => {
    // Given / When
    const result = isSymbol({});
    // Then
    expect(result).toEqual(false);
  });
});
