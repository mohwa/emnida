// eslint-disable-next-line
import { isWeakMap } from '../../../lib/type';

describe('isWeakMap', () => {
  it('should be return true if weakMap type', () => {
    // Given / When
    const result = isWeakMap(new WeakMap());
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result = isWeakMap('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isWeakMap(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isWeakMap(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isWeakMap(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isWeakMap(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isWeakMap(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if object type', () => {
    // Given / When
    const result = isWeakMap({});
    // Then
    expect(result).toEqual(false);
  });
});
