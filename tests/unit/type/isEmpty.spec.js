// eslint-disable-next-line
import { isEmpty } from '../../../lib/type';

describe('isEmpty', () => {
  it('should be return true if array is empty', () => {
    // Given / When
    const result = isEmpty([]);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if object is empty', () => {
    // Given / When
    const result = isEmpty({});
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if null type', () => {
    // Given / When
    const result = isEmpty(null);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if undefined type', () => {
    // Given / When
    const result = isEmpty(undefined);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true or false if string type', () => {
    // Given / When
    const result1 = isEmpty('test');
    const result2 = isEmpty('');
    const result3 = isEmpty('  ');
    // Then
    expect(result1).toEqual(false);
    expect(result2).toEqual(true);
    expect(result3).toEqual(false);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isEmpty(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isEmpty(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isEmpty(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if array has some element', () => {
    // Given / When
    const result = isEmpty([1]);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if object has some property', () => {
    // Given / When
    const result = isEmpty({ x: 1 });
    // Then
    expect(result).toEqual(false);
  });
});
