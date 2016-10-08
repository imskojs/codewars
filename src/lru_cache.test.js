const assert = require('chai').assert;
const LRUCache = require('./lru_cache');

describe('LRU Cache', function () {
  const store = new LRUCache(4, {a: 1});

  it(`should be a constructor, with capacity, optional init value`, function () {
    assert.equal(store.capacity, 4, 'store.capacity');
  });

  it('should increase size as we add new key-value pair', function () {
    assert.equal(store.size, 1, 'store.size');
    assert.equal(store.a, 1, 'store.a');
    assert.equal(store.cache('b', 2).b, 2, 'store.b');
    assert.equal(store.size, 2, 'store.size');
  });

  it('should have `cache`, `delete`, and `size` not (enumerable, writable, nor configurable) ', function () {
    assert.equal(store.hasOwnProperty('cache'), false);
    assert.equal(store.hasOwnProperty('delete'), false);
    assert.equal(store.hasOwnProperty('size'), false);
    assert.equal(store.delete('cache'), false);
    assert.equal(store.delete('delete'), false);
    assert.equal(store.delete('capacity'), false);
    assert.equal(store.delete('size'), false);
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

  it('should have delete method undeletable', function () {
    assert.equal(delete store.delete, false );
    assert.equal(delete store.capacity, false );
    assert.equal(delete store.size, false );
  });



})  ;

