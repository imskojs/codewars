const assert = require('chai').assert;
const MemoryManager = require('./simple_memory_manager');

describe('Memory Manager', function () {
  let array = new Array(16);
  let memoryManager = new MemoryManager(array);
  it('should allocate', function () {
    let pointer = memoryManager.allocate(8);
    memoryManager.write(pointer, 'a');
    assert(memoryManager.read(pointer), 'a');
    assert(array[pointer], 'a');
    
  });
});


