// eslint-disable-next-line
import { isWeakSet } from '../../../lib/type';

describe('isWeakSet', () => {
  it('should be return true if weakSet type', () => {
    // Given / When
    const result = isWeakSet(new WeakSet());
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result = isWeakSet('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isWeakSet(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isWeakSet(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isWeakSet(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isWeakSet(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isWeakSet(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if object type', () => {
    // Given / When
    const result = isWeakSet({});
    // Then
    expect(result).toEqual(false);
  });
});
