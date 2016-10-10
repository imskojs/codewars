const assert = require('chai').assert;
const listToArray = require('./list_to_array.js');
describe('List To Array', function () {
  it('should work', function () {
    var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
    var list2 = {value: "foo", next: {value: "bar", next: null}};

    assert.deepEqual(listToArray(list1), [1, 2, 3]);
    assert.deepEqual(listToArray(list2), ["foo", "bar"]);
    
  });
  
});