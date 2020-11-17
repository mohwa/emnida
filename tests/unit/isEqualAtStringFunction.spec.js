// eslint-disable-next-line
import { isEqualAtStringFunction } from '../../lib';

describe('isEqualAtStringFunction', () => {
  it('should be return true or false when comparing function and function', () => {
    // Given / When
    const result1 = isEqualAtStringFunction(
      () => console.log(1),
      () => console.log(1)
    );
    const result2 = isEqualAtStringFunction(
      () => console.log(1),
      () => console.log(2)
    );
    // Then
    expect(result1).toEqual(true);
    expect(result2).toEqual(false);
  });
});
