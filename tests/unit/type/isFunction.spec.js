// eslint-disable-next-line
import { isFunction } from '../../../lib/type';

describe('isFunction', () => {
  it('should be return true if function type', () => {
    // Given / When
    const result = isFunction(function() {});
    // Then
    expect(result).toEqual(true);
  });

  it('should be return true if function type', () => {
    // Given / When
    const result = isFunction(() => {});
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result = isFunction('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isFunction(1);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isFunction(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isFunction(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isFunction(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isFunction(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if object type', () => {
    // Given / When
    const result = isFunction({});
    // Then
    expect(result).toEqual(false);
  });
});
