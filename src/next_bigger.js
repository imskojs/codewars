//https://en.wikipedia.org/wiki/Steinhaus%E2%80%93Johnson%E2%80%93Trotter_algorithm
module.exports = 
function nextBigger(n){
  let nums = (n + '').split('').map(numStr => +numStr);

  function permute(nums, matrix){
    if(nums.length === 0){
      return matrix;
    }
    let numToInsert = nums.shift();
    let newMatrix = [];
    matrix.forEach((array, i) => {
      // 0 is odd; 1 is even
      if(i % 2 === 0){
        // when odd
        for(let i = array.length; i >= 0; --i){
          let copiedArray = array.slice();
          copiedArray.splice(i, 0, numToInsert);
          newMatrix.push(copiedArray);
        }
      } else {
        // when even
        for(let i = 0; i <= array.length; ++i){
          let copiedArray = array.slice();
          copiedArray.splice(i, 0, numToInsert);
          newMatrix.push(copiedArray);
        }
      }
    });
    return permute(nums, newMatrix);
  }

  let matrix = permute(nums, [[]]);

  let resultArray = matrix.reduce((curr, next) => {
    let curNum = +curr.join('');
    let nextNum = +next.join('');
    if(curNum > nextNum){
      return curr;
    } else {
      return next;
    }
  });
  return +resultArray.join('');


};


