let assert = require('chai').assert;
require('../src/jaden_casing_strings');
let calculateYears = require('../src/money,money,money');
let findOutlier = require('../src/find_the_parity_outlier');
let XO = require('../src/exes_and_ohs');
let diamond = require('../src/give_me_diamond');


describe('Jaden Casing String', () => {
  it('should capitalize every word', () => {
    assert.equal(
      "How can mirrors be real if our eyes aren't real".toJadenCase(),
      "How Can Mirrors Be Real If Our Eyes Aren't Real");
  });
});

describe('Money,Money,Money', () => {
  it('should return correct number of years to achieve desired amount', () => {
    assert.equal(calculateYears(1000, 0.05, 0.18, 1100), 3);
    assert.equal(calculateYears(1000,0.01625,0.18,1200), 14);
    assert.equal(calculateYears(1000,0.05,0.18,1000), 0);
  });
});

describe('Find the Parity Outlier', function () {
  it('should return N, unique odd or even number(outlier)', function () {
    assert.equal(findOutlier([0, 1, 2]), 1);
    assert.equal(findOutlier([1, 2, 3]), 2);
    assert.equal(findOutlier([2,6,8,10,3]), 3);
    assert.equal(findOutlier([0,0,3,0,0]), 3);
    assert.equal(findOutlier([1,1,0,1,1]), 0);
  });
});

describe('Exes and Ohs', function () {
  it('should check whether a string has the same amount of xs ands os', function () {
    assert.equal(XO('xo'),true);
    assert.equal(XO("xxOo"),true);
    assert.equal(XO("xxxm"),false);
    assert.equal(XO("Oo"),false);
    assert.equal(XO("ooom"),false); 
  });
});

describe('Give me Diamond', function () {
  it('should return a shape of a diamond for odd numbers', function () {
    assert.equal(diamond(3), " *\n***\n *\n");
    assert.equal(diamond(2), null);
    assert.equal(diamond(-3), null);
    assert.equal(diamond(0), null);
  });
});
