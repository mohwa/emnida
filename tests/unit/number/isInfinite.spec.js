// eslint-disable-next-line
import { isInfinite } from '../../../lib/number';

describe('isInfinite', () => {
  it('should be return false if Infinity', () => {
    // Given / When
    const result = isInfinite(Infinity);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if NaN', () => {
    // Given / When
    const result = isInfinite(NaN);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if 0 / 0', () => {
    // Given / When
    const result = isInfinite(0 / 0);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if 1 / 0', () => {
    // Given / When
    const result = isInfinite(1 / 0);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result1 = isInfinite('2e64');
    const result2 = isInfinite('');
    const result3 = isInfinite('    ');
    // Then
    expect(result1).toEqual(true);
    expect(result2).toEqual(true);
    expect(result3).toEqual(true);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isInfinite(false);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isInfinite(null);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isInfinite(undefined);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isInfinite(Symbol(1));
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if object type', () => {
    // Given / When
    const result = isInfinite({});
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if 0', () => {
    // Given / When
    const result = isInfinite(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if 2e64', () => {
    // Given / When
    const result = isInfinite(2e64);
    // Then
    expect(result).toEqual(false);
  });
});
