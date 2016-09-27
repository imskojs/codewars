var hamming = (n) => {
  let sequences = [1];
  let lastIndex = 0;
  let smallestIndex = 0;
  while(sequences.length < n){
    let lastNum = sequences[sequences.length - 1];
    let candidates = [];
    let appliedLastIndex = false;
    for(let i = lastIndex; i < sequences.length; ++i){
      let two = sequences[i] * 2;
      let three = sequences[i] * 3;
      let five = sequences[i] * 5;
      if(two > lastNum){
        candidates.push(two);
        if(appliedLastIndex === false){
          if(smallestIndex > i){
            smallestIndex = i;
          }
          appliedLastIndex = true;
        }
      }
      if(three > lastNum){
        candidates.push(three);
        if(appliedLastIndex === false){
          if(smallestIndex > i){
            smallestIndex = i;
          }
          appliedLastIndex = true;
        }
      }
      if(five > lastNum){
        candidates.push(five);
        if(appliedLastIndex === false){
          if(smallestIndex > i){
            smallestIndex = i;
          }
          appliedLastIndex = true;
        }
      }
    }
    lastIndex = smallestIndex;
    let smallest = Math.min.apply(Math, candidates);
    sequences.push(smallest);
  }
  return sequences.pop();


};






module.exports = hamming;
