import { assert } from 'chai';

describe('isEqual', function() {
  before((browser, done) => {
    browser.url(browser.launch_url, () => done());
  });

  after((browser, done) => {
    browser.end(() => done());
  });

  it('should be return true when equal first argument and second argument of primitive type', async browser => {
    // const global = await browser.getGlobalObject();
    browser.execute(
      function() {
        // Given / When
        const isEqual = emnida.isEqual;

        const results = {
          result1: isEqual('1', '1'),
          result2: isEqual(2, 2),
          result3: isEqual(true, true),
          result4: isEqual(undefined, undefined),
          result5: isEqual(null, null),
        };

        try {
          const symbol = Symbol(3);

          return Object.assign(results, {
            result6: isEqual(symbol, symbol),
            result7: isEqual(10n, 10n),
          });
        } catch (e) {
          return results;
        }
      },
      [],
      function(ret) {
        const v = ret.value;
        // Then
        assert.equal(v.result1, true);
        assert.equal(v.result2, true);
        assert.equal(v.result3, true);
        assert.equal(v.result4, true);
        assert.equal(v.result5, true);
        assert.equal(v.result6, true);
        assert.equal(v.result7, true);
      }
    );
  });

  // it('should be return false if string type', browser => {
  //   browser.execute(
  //     function() {
  //       return emnida.type.isUndefined('test');
  //     },
  //     [],
  //     function(ret) {
  //       assert.equal(ret.value, false);
  //     }
  //   );
  // });
});
