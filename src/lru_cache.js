//  When the cache is full, the algorithm must choose which items to 
// discard to make room for the new ones.

// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
class Parent {
  constructor(){
    this.size = 0;
  }
}
  
class LRUCache  {
  constructor(capacity, init){
    this.pairs = {};
    this.capacity = capacity;

    Object.defineProperty(this, '_size', { writable: true, value: 0 });
    // Object.defineProperty(this, 'cache', { 
    //   enumerable: false,
    //   configurable: false,
    //   writeable: false,
    //   value: (key, val) => { 
    //     defineAndSet(this, key, val); 
    //     return this; 
    //   }
    // });

    if(init){
      for(let key in init){
        defineAndSet(this, key, init[key]);
      }
    }
  } //ctor
  cache(key, val) {
    defineAndSet(this, key, val);
    return this;
  }
  get size(){
    return this._size;
  }

} // LRU


function defineAndSet(self, key, val){
  Object.defineProperty(self, key, { enumerable: true, configurable: true,
    get: function(){ return self.pairs[key]; },
    set: function(value){
      if(self.pairs[key] === undefined){ ++self._size; }
      self.pairs[key] = value;
    }
  });
  self[key] = val;
}



var store = new LRUCache(5, {a: 1});
console.dir(store.hasOwnProperty('cache'));






module.exports = LRUCache;