// eslint-disable-next-line
import { isFloat } from '../../../lib/number';

describe('isFloat', () => {
  it('should be return true if 10.1', () => {
    // Given / When
    const result = isFloat(10.1);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if -10.34', () => {
    // Given / When
    const result = isFloat(-10.34);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if 1000', () => {
    // Given / When
    const result = isFloat(1000);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if 0', () => {
    // Given / When
    const result = isFloat(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result1 = isFloat('10.36');
    const result2 = isFloat('');
    const result3 = isFloat('    ');
    // Then
    expect(result1).toEqual(false);
    expect(result2).toEqual(false);
    expect(result3).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isFloat(false);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isFloat(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isFloat(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isFloat(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if object type', () => {
    // Given / When
    const result = isFloat({});
    // Then
    expect(result).toEqual(false);
  });
});
