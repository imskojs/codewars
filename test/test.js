let assert = require('chai').assert;
require('../src/jaden_casing_strings');
let calculateYears = require('../src/money,money,money');
let findOutlier = require('../src/find_the_parity_outlier');
let XO = require('../src/exes_and_ohs.js');
let diamond = require('../src/give_me_diamond');
let validParentheses = require('../src/valid_parentheses');
let difference = require('../src/array.diff');
let validate = require('../src/validate_credit_card_number');
let list = require('../src/format_like_bart');
let autocorrect = require('../src/evil_autocorrect_prank');
let cakes = require('../src/pete,the_baker');
let oddity = require('../src/oddity');


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
    assert.equal(XO('xo'),true );
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

describe('Valid Parentheses', function () {
  it('should return true if parentheses are correctly closed', function () {
    assert.equal(validParentheses( "()" ), true);
    assert.equal(validParentheses( "())" ), false);
  });
});

describe('Array.diff', function () {
  it('should return arrays excluding items in second argument', function () {
    assert.deepEqual(difference(['a', 'b', 'c'], ['c']), ['a', 'b']);
    assert.deepEqual(difference(['a', 'c', 'c'], ['c']), ['a']);
  });
});

describe('Validate Credit Card Number', function () {
  it('should validate credit card number using the Luhn Algorithm', function () {
    assert.equal(validate(891), false);
    assert.equal(validate(1714), false);
    assert.equal(validate(893), true);
  });
});

describe('Formats a string of names like "Bart,List & Maggie"', function () {
  it('Format a string with last 3 words using ampersand', function () {
    assert.equal(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
    "Must work with many names");
    assert.equal(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
    "Must work with many names");
    assert.equal(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
    "Must work with two names");
    assert.equal(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name");
    assert.equal(list([]), '', "Must work with no names");
  });
});


describe('Evil Autocorrect Prank', function () {
  it('should change instance of you or u to your sister youuuu, uuuu, u, you', function () {
    assert.equal(autocorrect('you'), 'your sister');
    assert.equal(autocorrect('u'), 'your sister');
    assert.equal(autocorrect('youtube'), 'youtube');
    assert.equal(autocorrect('urban'), 'urban');
    assert.equal(autocorrect('youuuuu'), 'your sister');
    assert.equal(autocorrect('uuu'), 'uuu');
  });
});

describe('Pete, the baker', function () {
  it('pass example tests', function() {
    let recipe = {flour: 500, sugar: 200, eggs: 1};
    let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
    assert.equal(cakes(recipe, available), 2);
    
    recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
    available = {sugar: 500, flour: 2000, milk: 2000};
    assert.equal(cakes(recipe, available), 0);
  });
});

describe('Odd/Even number of divisors', function () {
  it('should return whether number of divisors is odd or even', function () {
    assert.equal(oddity(1),'odd');
    assert.equal(oddity(5),'even');
    assert.equal(oddity(16),'odd');
  });
});

