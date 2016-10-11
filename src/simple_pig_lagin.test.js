const assert = require('chai').assert;
const pigIt = require('./simple_pig_latin.js');

describe('Simple Pig Latin', function () {
  it('should complete', function () {
    assert.equal(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay');
    assert.equal(pigIt('This is my string'),'hisTay siay ymay tringsay');
  });
});


