//====================================================
// Requires// TODO: put them right above the tests
//====================================================
let assert = require('chai').assert;
let expect = require('chai').expect;
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
let isValidIP = require('../src/ipValidation');
let score = require('../src/greed_is_good');
let palindromeChainLength = require('../src/palindrome_chain_length');
let nextBigger = require('../src/next_bigger');
let romanNumeral = require('../src/roman_numerals_encoder');
let recoverSecret = require('../src/recover_secret');
let stripUrlParams = require('../src/strip_url_params');
let generateBC = require('../src/breadcrumb_generator');
let parseToInt = require('../src/parse_int');
let hamming = require('../src/hamming');


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

describe('IP Validation', function () {
  it('should validate ipv4 addresses', function () {
    assert.equal(isValidIP('123.45.67.89'), true);
    assert.equal(isValidIP('1.2.3.4'), true);
    assert.equal(isValidIP('123.1.1.0'), true);
    assert.equal(isValidIP('1.2.3'), false);
    assert.equal(isValidIP('0.0.0.0'), true);
    assert.equal(isValidIP('255.255.255.255'), true);
    assert.equal(isValidIP('238.46.26.43'), true);
    assert.equal(isValidIP('1.2.3.4.5'), false);
    assert.equal(isValidIP('123.456.78.90'), false);
    assert.equal(isValidIP('12 3.045.067.089'), false);
    assert.equal(isValidIP('0.34.82.53'), true);
  });
});

describe('Greed is Good', function () {
  it('should return correct value from the rules', function(){
    assert.equal(score( [2, 3, 4, 6, 2] ), 0);
    assert.equal(score( [4, 4, 4, 3, 3] ), 400);
    assert.equal(score( [2, 4, 4, 5, 4] ), 450);
    assert.equal(score( [1, 1, 1, 3, 3] ), 1000);
  });
});

describe('Palindrome chain length', function () {
  it('should return number of operations needed to make a number palindrome', function () {
    assert.equal(palindromeChainLength(87), 4);
  });
});

describe('Next bigger number with the same digits', function () {
  it('should return the biggest number formed using input', function () {
    assert.equal(nextBigger(12),21);
    assert.equal(nextBigger(513),531);
    assert.equal(nextBigger(2017),2071);
    assert.equal(nextBigger(414),441);
    assert.equal(nextBigger(144),414);
    assert.equal(nextBigger(1234567890),1234567908);
    assert.equal(nextBigger(9876543210),-1);
    assert.equal(nextBigger(59884848459853), 59884848483559);
  });
});

describe('Roman Numerals Encoder', function () {
  it('should convert number to roman numerals', function () {
    assert.equal(romanNumeral(1000), 'M');
  });
});

describe('Recover a secret string from random triplets', function () {
  it('should find a string given arbitrary array of arrays', function () {
    let triplets1 = [
      ['t','u','p'], ['w','h','i'], ['t','s','u'],
      ['a','t','s'], ['h','a','p'], ['t','i','s'], ['w','h','s']
    ];
    assert.equal(recoverSecret(triplets1), 'whatisup');
  });
});

describe('Strip Url Params', function () {
  it('should strip url params', function () {

    assert.equal(
      stripUrlParams('www.codewars.com?a=1&b=2&a=2'), 
      'www.codewars.com?a=1&b=2'
    );

    assert.equal(
      stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']), 
      'www.codewars.com?a=1'
    );

    assert.equal(
      stripUrlParams('www.codewars.com', ['b']),
      'www.codewars.com'
    );


  });
});


describe('Breadcrumb Generator', function () {

  it('should make all elements uppercase, and make first text HOME', function () {
    assert.equal(
      generateBC("www.naver.com", " : "),
      '<span class="active">HOME</span>'
    );
  });

  it('should wrap last text with span.active, and use seprator given', function () {
    assert.equal(
      generateBC("http://www.naver.com/blog", " : "),
      '<a href="/">HOME</a> : <span class="active">BLOG</span>'
    );
  });

  it('should not return file extension', function () {
    assert.equal(
      generateBC("http://www.naver.com/blog.html", " : "),
      '<a href="/">HOME</a> : <span class="active">BLOG</span>'
    );
  });

  it('should handle protocol', function () {
    assert.equal(
      generateBC("http://www.naver.com", " : "),
      '<span class="active">HOME</span>'
    );
  });

  it('should handle trailing slash', function () {
    assert.equal(
      generateBC("www.naver.com/", " : "),
      '<span class="active">HOME</span>'
    );
  });

  it('should ignore index.*', function () {
    assert.equal(
      generateBC("www.microsoft.com/important/docs/index.htm", " * "),
     '<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <span class="active">DOCS</span>'
    );
  });

  it(`should make characters > 30 to acrynoms other than root(home), also it should remove
    ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]
    when making acronyms`, function () {
    assert.equal(
      generateBC("www.very-long-url-to-make-a-silly-yet.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp", " > "),
      '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>'
    );
  });

  it('should convert characters with `-` in text to space', function () {
    assert.equal(
      generateBC("mysite.com/very-long/example.asp", " > "),
      '<a href="/">HOME</a> > <a href="/very-long/">VERY LONG</a> > <span class="active">EXAMPLE</span>'
    );
  });

  it('should ignore anchors and parameters', function () {
    assert.equal(
      generateBC("mysite.com/example-man.asp#top?x=11&y=22", " > "),
      '<a href="/">HOME</a> > <span class="active">EXAMPLE MAN</span>'
    );
  });

});

describe('parseInt() reloaded', function () {

  it('should handle hundred', function () {
    assert.equal(parseToInt('one hundred ten'), 110);
    assert.equal(parseToInt('three hundred five'), 305);
  });
  it('should handle 11,12, ..., 19, 20, 30, 40, ..., 90', function () {
    assert.equal(parseToInt('eleven'), 11);
    assert.equal(parseToInt('one hundred eleven'), 111);
    assert.equal(parseToInt('one hundred fifteen'), 115);
    assert.equal(parseToInt('twenty'), 20);
    assert.equal(parseToInt('forty'), 40);
    assert.equal(parseToInt('two hundred seventy'), 270);
  });

  it('should handle "-"', function () {
    assert.equal(parseToInt('twenty-five'), 25);
    assert.equal(parseToInt('forty-one'), 41);
    assert.equal(parseToInt('two hundred seventy-seven'), 277);
  });

  it('should handle "and"', function () {
    assert.equal(parseToInt('three hundred and twenty-five'), 325);
  });

  it('should handle thousand, and one million', function () {
    assert.equal(parseToInt('three thousand one hundred forty'), 3140);
    assert.equal(parseToInt('one hundred forty-five thousand two hundred forty'), 145240);
    assert.equal(parseToInt('one million'), 1000000);
  });


});

describe('Hamming Numbers', function () {
  it('should find nth', function () {
    expect(hamming(1)).to.equal(1);
    expect(hamming(2)).to.equal(2);
    expect(hamming(3)).to.equal(3);
    expect(hamming(4)).to.equal(4);
    expect(hamming(5)).to.equal(5);
    expect(hamming(6)).to.equal(6);
    expect(hamming(7)).to.equal(8);
    expect(hamming(8)).to.equal(9);
    expect(hamming(9)).to.equal(10);
    expect(hamming(10)).to.equal(12);
    expect(hamming(11)).to.equal(15);
    expect(hamming(12)).to.equal(16);
    expect(hamming(13)).to.equal(18);
    expect(hamming(14)).to.equal(20);
    expect(hamming(15)).to.equal(24);
    expect(hamming(16)).to.equal(25);
    expect(hamming(17)).to.equal(27);
    expect(hamming(18)).to.equal(30);
    expect(hamming(19)).to.equal(32);
  });
});


let sum_pairs = require('../src/sum_of_pairs');
describe('Sum of Pairs', function () {
  it('should pass', function () {
    let l1= [1, 4, 8, 7, 3, 15];
    let l2= [1, -2, 3, 0, -6, 1];
    let l3= [20, -13, 40];
    let l4= [1, 2, 3, 4, 1, 0];
    let l5= [10, 5, 2, 3, 7, 5];
    let l6= [4, -2, 3, 3, 4];
    let l7= [0, 2, 0];
    let l8= [5, 9, 13, -3];

    expect(sum_pairs(l1, 8)+"").to.equal([1, 7]+"");
    expect(sum_pairs(l2, -6)+"").to.equal([0, -6]+"");
    expect(sum_pairs(l3, -7)).to.equal(undefined);
    expect(sum_pairs(l4, 2)+"").to.equal([1, 1]+"");
    expect(sum_pairs(l5, 10)+"").to.equal([3, 7]+"");
    expect(sum_pairs(l6, 8)+"").to.equal([4, 4]+"");
    expect(sum_pairs(l7, 0)+"").to.equal([0, 0]+"");
    expect(sum_pairs(l8, 10)+"").to.equal([13, -3]+"");
  });
});


let titleCase = require('../src/title_case');
describe('Title Case', function () {
  it('should make first of each starting words capital', function () {
    assert.equal(titleCase(''), '');
    assert.equal(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings');
    assert.equal(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows');
    assert.equal(titleCase('the quick brown fox'), 'The Quick Brown Fox');
  });
});




// Valid

















describe('LRU Cache', function () {
  let store;

  it(`should be a constructor, with capacity, optional init value`, function () {
    store = new LRUCache(4, {a: 1});
    assert.equal(store.capacity, 4, 'store.capacity');
  });

  it('should increase size as we add new key-value pair', function () {
    assert.equal(store.size, 1, 'store.size');
    assert.equal(store.a, 1, 'store.a');
    assert.equal(store.cache('b', 2).b, 2, 'store.b');
    assert.equal(store.size, 2, 'store.size');
  });

  it('should have cached value as enumerable, but not anything else', function () {
    assert.deepEqual(Object.keys(store), ['a', 'b']);
  });

  it('should be possible to reassign the new property', function () {
    store.a = 5;
    assert.equal(store.a, 5, 'store.a');
  });

  it('should update already existing property when caching again', function () {
    store.cache('a', 11);
    assert.equal(store.a, 11);
  });

  it('should have chainable instance', function () {
    store.cache('c', 33).cache('d', 66);
    assert.equal(store.c, 33);
    assert.equal(store.d, 66);
  });

  it('should have a delete method', function () {
    assert.equal(store.delete('d'), true, "store.delete('d')");
    assert.equal(store.d, undefined, 'store.d');
  });

  it('should delete least recently used if size is bigger than cap', function(){
    store.a = 1;
    store.b = 2;
    store.c = 3;
    store.cache('d', 4);
    store.cache('e', 5);
    assert.equal(store.a, undefined);
  });

  it('should have `cache`, `delete`, and `size` not (enumerable, writable, nor configurable) ', function () {
    assert.equal(store.hasOwnProperty('cache'), false);
    assert.equal(store.hasOwnProperty('delete'), false);
    assert.equal(store.hasOwnProperty('size'), false);
    assert.equal(store.delete('cache'), false);
    assert.equal(store.delete('delete'), false);
    assert.equal(store.delete('size'), false);
  });


})  ;

