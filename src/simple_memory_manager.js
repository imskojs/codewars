/**
 * @constructor Creates a new memory manager for the provided array.
 * @param {memory} An array to use as the backing memory.
 */
// function MemoryManager(memory){

// }
class MemoryManager {
  constructor(memory){
    this.blocks = [
      // [1, 2],
      // [3, 3],
      // [10, 5],
      // [15, 10],
      // [25, 10]
    ];
    this.memory = memory;
  }

/**
 * Allocates a block of memory of requested size.
 * @param {number} size - The size of the block to allocate.
 * @returns {number} A pointer which is the index of the first location in the allocated block.
 * @throws If it is not possible to allocate a block of the requested size.
 */
  allocate(size){
    if(this.memory.length < size){
      throw new Error('total memory too small');
    }
    if(this.blocks.length === 0){
      this.blocks.push([0, size]);
      return 0;
    }
    if(this.blocks.length === 1){
      let usedStart = this.blocks[0][0];
      let usedEnd = this.blocks[0][1];
      if(usedStart >= size){
        this.blocks.unshift([0, size]);
        return 0;
      }
      if(this.blocks.length - usedEnd >= size){
        this.blocks.push([usedStart + usedEnd, size]);
        return usedStart + usedEnd;
      }
    }
    // Todo account for very first, and very end
    for(let i = 0, j = 1; j < this.blocks.length; ++i, ++j){
      let currBlock = this.blocks[i];
      let nextBlock = this.blocks[j];
      let currEndIndex = currBlock[0] + currBlock[1] - 1;
      let nextStartIndex = nextBlock[0];
      if(nextStartIndex - currEndIndex - 1 > size){
        let betweenIndex = currBlock[0] + currBlock[1];
        this.blocks.splice(j, 0, [betweenIndex, size]);
        return betweenIndex;
      }
    }

  }

/**
 * Releases a previously allocated block of memory.
 * @param {number} pointer - The pointer to the block to release.
 * @throws If the pointer does not point to an allocated block.
 */
  release(pointer){

  }

/**
 * Reads the value at the location identified by pointer
 * @param {number} pointer - The location to read.
 * @returns {number} The value at that location.
 * @throws If pointer is in unallocated memory.
 */
  read(pointer){

    let okToRead = this.blocks
      .some(array => {
        let key = array[0];
        let val = array[1];
        if(pointer >= key && pointer < key + val){
          return true;
        }
      });
    if(okToRead){
      return this.memory[pointer];
    } else {
      throw new Error(false);
    }
  }

/**
 * Writes a value to the location identified by pointer
 * @param {number} pointer - The location to write to.
 * @param {number} value - The value to write.
 * @throws If pointer is in unallocated memory.
 */
  write(pointer, value){
    let okToWrite = this.blocks
      .some(array => {
        let key = array[0];
        let val = array[1];
        if(pointer >= key && pointer < key + val){
          return true;
        }
      });
    if(okToWrite){
      this.memory[pointer] = value;
    } else {
      throw new Error(false);
    }
  }



}


module.exports = MemoryManager;


