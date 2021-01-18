import { assert } from 'chai';

describe('isUndefined', function() {
  before((browser, done) => {
    browser.url(browser.launch_url, () => done());
  });

  after((browser, done) => {
    browser.end(() => done());
  });

  it('should be return true if undefined type', browser => {
    browser.execute(
      function() {
        return window.emnida.type.isUndefined(undefined);
      },
      [],
      function(ret) {
        assert.equal(ret.value, true);
      }
    );
  });

  it('should be return false if string type', browser => {
    browser.execute(
      function() {
        return window.emnida.type.isUndefined('test');
      },
      [],
      function(ret) {
        assert.equal(ret.value, false);
      }
    );
  });
});
