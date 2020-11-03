// eslint-disable-next-line
import { isRegExp } from '../../../lib/type';

describe('isRegExp', () => {
  it('should be return true if regexp type', () => {
    // Given / When
    const result = isRegExp(/\d+/);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if regexp type', () => {
    // Given / When
    const result = isRegExp(new RegExp('\\d+'));
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if string type', () => {
    // Given / When
    const result = isRegExp('test');
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if number type', () => {
    // Given / When
    const result = isRegExp(0);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if boolean type', () => {
    // Given / When
    const result = isRegExp(true);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if null type', () => {
    // Given / When
    const result = isRegExp(null);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if undefined type', () => {
    // Given / When
    const result = isRegExp(undefined);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if symbol type', () => {
    // Given / When
    const result = isRegExp(Symbol(1));
    // Then
    expect(result).toEqual(false);
  });

  it('should be return false if object type', () => {
    // Given / When
    const result = isRegExp({});
    // Then
    expect(result).toEqual(false);
  });
});
