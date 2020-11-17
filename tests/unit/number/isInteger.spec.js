// eslint-disable-next-line
import { isInteger } from '../../../lib/number';

describe('isInteger', () => {
  it('should be return false if 0', () => {
    // Given / When
    const result = isInteger(0);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if 2e64', () => {
    // Given / When
    const result = isInteger(2e64);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if float', () => {
    // Given / When
    const result = isInteger(0.1);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if NaN', () => {
    // Given / When
    const result = isInteger(NaN);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if Infinity', () => {
    // Given / When
    const result = isInteger(Infinity);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result1 = isInteger('2e64');
    const result2 = isInteger('');
    const result3 = isInteger('    ');
    // Then
    expect(result1).toEqual(false);
    expect(result2).toEqual(false);
    expect(result3).toEqual(false);
  });
});
