//  When the cache is full, the algorithm must choose which items to 
// discard to make room for the new ones.

// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty


  
class LRUCache {
  constructor(capacity, init){
    this.pairs = {};
    this.capacity = capacity;

    Object.defineProperty(this, 'size', {
      enumerable: false,
      configurable: false,
      writable: true,
      value: 0
    });

    if(init){
      for(let key in init){
        Object.defineProperty(this, key, {
          enumerable: true,
          configurable: true,
          // writable: true,
          // value: init[key],
          get: function(){
            return this.pairs[key];
          },
          set: function(value){
            if(this.pairs[key] === undefined){
              ++this.size;
            }
            this.pairs[key] = value;
          }
        });
        console.log("key :::\n", init[key]);
        this[key] = init[key];
      }
    }

  } //ctor

} // LRU

let x = new LRUCache(4, {a: 1});
console.log("x :::\n", x);
console.log("x.size :::\n", x.size);
console.log("x.a :::\n", x.a);








module.exports = LRUCache;