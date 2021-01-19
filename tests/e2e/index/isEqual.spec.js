import { assert } from 'chai';

describe('isEqual', function() {
  before((browser, done) => {
    browser.url(browser.launch_url, () => done());
  });

  after((browser, done) => {
    browser.end(() => done());
  });

  it('should be return true when equal first argument and second argument of primitive type', browser => {
    browser.execute(
      function() {
        // Given / When
        const isEqual = emnida.isEqual;
        let results = {
          result1: isEqual('1', '1'),
          result2: isEqual(2, 2),
          result3: isEqual(true, true),
          result4: isEqual(undefined, undefined),
          result5: isEqual(null, null),
          result6: true,
        };

        if (window.Symbol) {
          const symbol = Symbol(3);

          results = Object.assign(results, {
            result6: isEqual(symbol, symbol),
          });
        }

        return results;
      },
      [],
      function(ret) {
        // Then
        const v = ret.value;

        assert.equal(v.result1, true);
        assert.equal(v.result2, true);
        assert.equal(v.result3, true);
        assert.equal(v.result4, true);
        assert.equal(v.result5, true);
        assert.equal(v.result6, true);
      }
    );
  });

  it('should be return true when comparing complex an objects', browser => {
    browser.execute(
      function() {
        // Given / When
        const isEqual = emnida.isEqual;

        return {
          result1: isEqual({ x: 2, y: 1 }, { y: 1, x: 2 }),
          result2: isEqual({ x: 2, y: 1, z: '3' }, { x: 2, y: 1, z: '3' }),
          result3: isEqual([1, 3, 4, 5], [1, 3, 4, 5]),
          result4: isEqual([1, { xx: 1 }, 4, 5], [1, { yy: 1 }, 4, 5]),
        };
      },
      [],
      function(ret) {
        // Then
        const v = ret.value;

        assert.equal(v.result1, true);
        assert.equal(v.result2, true);
        assert.equal(v.result3, true);
        assert.equal(v.result4, false);
      }
    );
  });

  it('should be return false when comparing complex an objects', browser => {
    browser.execute(
      function() {
        // Given / When
        const isEqual = emnida.isEqual;

        return {
          result1: isEqual([1, { xx: 1 }, 4, 5], [1, { xx: 1 }, 4, 5, '7']),
          result2: isEqual([1, 3, 4, () => {}], [1, 3, 4, () => {}, { x: 2 }]),
        };
      },
      [],
      function(ret) {
        // Then
        const v = ret.value;

        assert.equal(v.result1, false);
        assert.equal(v.result2, false);
      }
    );
  });

  it('should be return false if comparing function to function', browser => {
    browser.execute(
      function() {
        // Given / When
        const isEqual = emnida.isEqual;
        let results = {
          result1: isEqual(
            function() {
              console.log(2);
            },
            function() {
              console.log(2);
            }
          ),
          result2: false,
        };

        if (window.Symbol) {
          results = Object.assign(results, {
            result2: isEqual(
              () => {
                console.log(1);
              },
              () => {
                console.log(1);
              }
            ),
          });
        }

        return results;
      },
      [],
      function(ret) {
        // Then
        const v = ret.value;

        assert.equal(v.result1, false);
        assert.equal(v.result2, false);
      }
    );
  });

  it('should be return true or false when comparing value that made by the constructor', browser => {
    browser.execute(
      function() {
        // Given / When
        const isEqual = emnida.isEqual;

        return {
          result1: isEqual(String(1), String(1)),
          result2: isEqual(Number(1), Number(1)),
          result3: isEqual(Boolean(true), Boolean(true)),
          result4: isEqual(new Function('console.log(1)'), new Function('console.log(1)')),
          result5: isEqual(new Function('console.log(1)'), new Function('console.log(3333)')),
          result6: isEqual(new RegExp('\\d+'), new RegExp('\\d+')),
          result7: isEqual(new RegExp('\\s+'), new RegExp('\\s+')),
        };
      },
      [],
      function(ret) {
        // Then
        const v = ret.value;

        assert.equal(v.result1, true);
        assert.equal(v.result2, true);
        assert.equal(v.result3, true);
        assert.equal(v.result4, false);
        assert.equal(v.result5, false);
        assert.equal(v.result6, true);
        assert.equal(v.result7, true);
      }
    );
  });

  it('should be return true or false if Map object type', browser => {
    browser.execute(
      function() {
        // Given / When
        const isEqual = emnida.isEqual;

        const m1 = new Map();
        m1.set('x', 1);
        m1.set('y', 2);

        const m2 = new Map();
        m2.set('x', 1);
        m2.set('y', 2);
        m2.set('z', 3);

        return {
          result1: isEqual(new Map(), new Map()),
          result2: isEqual(m1, m2),
        };
      },
      [],
      function(ret) {
        // Then
        const v = ret.value;

        assert.equal(v.result1, true);
        assert.equal(v.result2, false);
      }
    );
  });

  it('should be return true or false if Set object type', browser => {
    browser.execute(
      function() {
        // Given / When
        const isEqual = emnida.isEqual;

        const s1 = new Set();
        s1.add(1);
        s1.add(2);

        const s2 = new Set();
        s2.add(1);
        s2.add(2);
        s2.add(33);

        return isEqual(s1, s2);
      },
      [],
      function(ret) {
        // Then
        assert.equal(ret.value, false);
      }
    );
  });
});
