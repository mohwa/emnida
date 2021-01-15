import { assert } from 'chai';

describe('isUndefined', function() {
  it('should be return true if undefined type', (browser, done) => {
    browser
      .url(browser.launch_url)
      .execute(
        () => {
          return window.emnida.type.isUndefined(undefined);
        },
        [],
        function(ret) {
          assert.equal(ret.value, true);
        }
      )
      .end(done);
  });
});
