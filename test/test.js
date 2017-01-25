var assert   = require('assert'),
    mochaLog = require('../script.js');

describe('Array', function () {
  describe('#indexOf()', function () {
    afterEach(function () {
      // runs after each test in this block
      console.log();
    });
    it('should return -1 when the value is not present', function () {
      mochaLog('Some important info');
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });


    it('should also return -1 when the value is not present', function () {
      mochaLog('Other important info');
      mochaLog('Something went wrong?', 4, 'fail');
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});