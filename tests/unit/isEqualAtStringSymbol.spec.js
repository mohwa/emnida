// eslint-disable-next-line
import { isEqualAtStringSymbol } from '../../lib';

describe('isEqualAtStringSymbol', () => {
  it('should be return true or false when comparing symbol and symbol', () => {
    // Given / When
    const result1 = isEqualAtStringSymbol(Symbol(3), Symbol(3));
    const result2 = isEqualAtStringSymbol(Symbol(3), Symbol(4));
    // Then
    expect(result1).toEqual(true);
    expect(result2).toEqual(false);
  });
});
