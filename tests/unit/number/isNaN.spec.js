// eslint-disable-next-line
import { isNaN } from '../../../lib/number';

describe('isNaN', () => {
  it('should be return true if NaN', () => {
    // Given / When
    const result = isNaN(NaN);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if 0 / 0', () => {
    // Given / When
    // 0 / 0 return a NaN
    const result = isNaN(0 / 0);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if 2e64', () => {
    // Given / When
    const result = isNaN(2e64);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if 1 / 0', () => {
    // Given / When
    const result = isNaN(1 / 0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if Infinity', () => {
    // Given / When
    const result = isNaN(Infinity);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result1 = isNaN('2e64');
    const result2 = isNaN('');
    const result3 = isNaN('    ');
    // Then
    expect(result1).toEqual(false);
    expect(result2).toEqual(false);
    expect(result3).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isNaN(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isNaN(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isNaN(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isNaN(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if object type', () => {
    // Given / When
    const result = isNaN({});
    // Then
    expect(result).toEqual(false);
  });
});
