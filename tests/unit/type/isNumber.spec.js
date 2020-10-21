// eslint-disable-next-line
import { isNumber } from '../../../lib/type';

describe('isNumber', () => {
  it('should be return true if 0', () => {
    // Given
    const v = 0;
    // When
    const result = isNumber(v);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if 1', () => {
    // Given
    const v = 1;
    // When
    const result = isNumber(v);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if Infinity', () => {
    // Given / When
    const result = isNumber(Infinity);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result = isNumber('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isNumber(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isNumber(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isNumber(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isNumber(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if object type', () => {
    // Given / When
    const result = isNumber({});
    // Then
    expect(result).toEqual(false);
  });
});
