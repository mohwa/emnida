// eslint-disable-next-line
import { isMap } from '../../../lib/type';

describe('isMap', () => {
  it('should be return true if map type', () => {
    // Given / When
    const result = isMap(new Map());
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result = isMap('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isMap(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isMap(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isMap(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isMap(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isMap(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if object type', () => {
    // Given / When
    const result = isMap({});
    // Then
    expect(result).toEqual(false);
  });
});
