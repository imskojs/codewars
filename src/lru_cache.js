//  When the cache is full, the algorithm must choose which items to 
// discard to make room for the new ones.

// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
  // Object.defineProperty(this, 'key', { 
  //   enumerable: false,
  //   configurable: false,
  //   writeable: false,
  //   value: (key, val) => { 
  //     defineAndSet(this, key, val); 
  //     return this; 
  //   }
  // });
  
class LRUCache  {
  constructor(capacity, init){
    Object.defineProperty(this, 'pairs', { writable: true, value: {} });
    Object.defineProperty(this, '_capacity', { writable: true, value: capacity });
    Object.defineProperty(this, '_size', { writable: true, value: 0 });
    Object.defineProperty(this, '_track', { writable: true, value: [] });
    Object.defineProperty(this, '_delete', { 
      value: function(key){
        if(this.pairs[key]){
          --this._size;
          delete this.pairs[key];
          delete this[key];
          let index = this._track.indexOf(key);
          if(index !== -1){
            this._track.splice(index, 1);
          }
          return true;
        } else if(key === 'cache' || key === 'delete' || key === 'size') {
          return false;
        } else {
          return true;
        }
      }
    });

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

  get capacity(){
    return this._capacity;
  }

  set capacity(val){
    this._capacity = val;
    while(this._track.length > this._capacity){
      this.delete(this._track[0]);
    }
  }

  get delete(){
    return this._delete;
  }

  set delete(val){
    return this._delete;
  }

  // delete(key){
  //   // let key = arguments[0];
  //   if(this.pairs[key]){
  //     --this._size;
  //     delete this.pairs[key];
  //     delete this[key];
  //     let index = this._track.indexOf(key);
  //     if(index !== -1){
  //       this._track.splice(index, 1);
  //     }
  //     return true;
  //   } else if(key === 'cache' || key === 'delete' || key === 'size') {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

} // LRU


function defineAndSet(self, key, val){
  Object.defineProperty(self, key, { enumerable: true, configurable: true,
    get: function(){ 
      let index = self._track.indexOf(key);
      if(index !== -1){
        self._track.splice(index, 1);
        self._track.push(key);
      }
      return self.pairs[key]; 
    },
    set: function(value){
      let index = self._track.indexOf(key);
      if(index !== -1){
        self._track.splice(index, 1);
      }
      self._track.push(key);
      if(self._track.length > self._capacity){
        let deleteKey = self._track[0];
        self.delete(deleteKey);
      }

      if(self.pairs[key] === undefined){ ++self._size; }
      self.pairs[key] = value;
    }
  });
  self[key] = val;
}

let x = new LRUCache(2, {a: 1, b: 2});
x.capacity = 1;
console.log("x :::\n", x);
let len = Object.keys(x).length;
console.log("len :::\n", len);


module.exports = LRUCache;