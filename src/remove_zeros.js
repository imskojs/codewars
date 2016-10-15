function removeZeros(array) {
  let numZeroes = 0;
  let j = 0;
  for(j; j < array.length - numZeroes; ++j){
    if(array[j] === '0' || array[j] === 0){
      shiftAndDelete(j);
    }
  }

  return array;
  
  function shiftAndDelete(n){
    numZeroes = numZeroes + 1;
    let val = array[n];
    for(let i = n + 1; i < array.length; i++){
      array[i - 1] = array[i];
    }
    array[array.length - 1] = val;
    j = j - 1;
  }
}


module.exports = removeZeros;