var assert = require('chai').assert;
var queueTime = require('./supermarket_queue.js');

describe("example tests", function() {
  it('should find how long to finish all queues', function () {
    assert.equal(queueTime([], 1), 0);
    assert.equal(queueTime([1,2,3,4], 1), 10);
    assert.equal(queueTime([2,2,3,3,4,4], 2), 9);
    assert.equal(queueTime([1,2,3,4,5], 100), 5);
  });
});