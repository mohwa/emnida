// eslint-disable-next-line
import { isFinite } from '../../../lib/number';

describe('isFinite', () => {
  it('should be return true if 0', () => {
    // Given / When
    const result = isFinite(0);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if 2e64', () => {
    // Given / When
    const result = isFinite(2e64);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if 0 / 0', () => {
    // Given / When
    const result = isFinite(0 / 0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if 1 / 0', () => {
    // Given / When
    const result = isFinite(1 / 0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if NaN', () => {
    // Given / When
    const result = isFinite(NaN);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if Infinity', () => {
    // Given / When
    const result = isFinite(Infinity);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result1 = isFinite('2e64');
    const result2 = isFinite('');
    const result3 = isFinite('    ');
    // Then
    expect(result1).toEqual(false);
    expect(result2).toEqual(false);
    expect(result3).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isFinite(false);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isFinite(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isFinite(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isFinite(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if object type', () => {
    // Given / When
    const result = isFinite({});
    // Then
    expect(result).toEqual(false);
  });
});
