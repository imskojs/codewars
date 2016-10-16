const assert = require('chai').assert;
const removeZeros = require('./remove_zeros.js');

describe('Remove Zeros', function () {
  it('should remove zeroes to the end without array#methods', function () {
    let input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
    let solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];

    assert.equal(
      JSON.stringify(removeZeros(input)),
      JSON.stringify(solution)
    );
    
  });
});

