const assert = require('chai').assert;
const decompose = require('./square_into_squares.js');
describe('Square into Squares, Protect trees', function () {
  it('should dcompose', function () {
    assert.deepEqual(decompose(2), null);
    assert.deepEqual(decompose(7), [2, 3, 6])    
  });
});
