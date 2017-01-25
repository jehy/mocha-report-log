'use strict';
var
  color = require('mocha/lib/reporters/base').color;
/**
 *
 * @param {string} data what you want to log
 * @param {int} level tabulation level
 * @param {string} type log type - fail, pass or pending
 */
var mochaLog = function (data, level, type) {
  level = level || 3;
  level++;
  type = type || 'pass';
  var space = '';
  for (var i = 0; i < level; i++)
    space += '  ';
  console.log(space + color(type, data));
};

module.exports = mochaLog;