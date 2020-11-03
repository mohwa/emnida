// eslint-disable-next-line
import { isSet } from '../../../lib/type';

describe('isSet', () => {
  it('should be return true if set type', () => {
    // Given / When
    const result = isSet(new Set());
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result = isSet('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isSet(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isSet(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isSet(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isSet(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isSet(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if object type', () => {
    // Given / When
    const result = isSet({});
    // Then
    expect(result).toEqual(false);
  });
});
