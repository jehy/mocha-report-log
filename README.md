#Mocha Report Log

[![Build Status](https://travis-ci.org/jehy/mocha-report-log.svg?branch=master)](https://travis-ci.org/jehy/mocha-report-log)

Simplifies colored logging from mocha tests.

##Installation
```bash
npm install mocha-report-log
```

##Usage
```js
var assert = require('assert');
var mochaLog = require('../script.js');
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
```
## Arguments
```js
/**
 *
 * @param {string} data what you want to log
 * @param {int} level tabulation level
 * @param {string} type log type - fail, pass or pending
 */
```
```
