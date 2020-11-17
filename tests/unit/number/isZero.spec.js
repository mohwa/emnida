// eslint-disable-next-line
import { isZero } from '../../../lib/number';

describe('isZero', () => {
  it('should be return true if 0', () => {
    // Given / When
    const result = isZero(0);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if NaN', () => {
    // Given / When
    const result = isZero(NaN);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if 1', () => {
    // Given / When
    // 0 / 0 return a NaN
    const result = isZero(1);
    // Then
    expect(result).toEqual(false);
  });
});
