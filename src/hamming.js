var hamming = (n) => {
  // console.log('input: ', n);
  if(n === 1){return 1;}
  let sequences = [1];
  let lastIndex = 0;
  let smallestIndex = 0;
  while( sequences[sequences.length - 1] < 30 && sequences.length < n){
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

  if(n > sequences.length){
    let num = 31;
    while(sequences.length < n){
      let newNum = num;
      while(newNum !== 0){
        if(newNum % 2 === 0){
          newNum = newNum / 2;
        } else if(newNum % 3 === 0){
          newNum = newNum / 3;
        } else if(newNum % 5 === 0){
          newNum = newNum / 5;
        } else {
          newNum = 0;
        }
        if(newNum === 1){break;}
      }
      if(newNum === 1){
        sequences.push(num);
      }
      ++num;
    }
  }
  var x = sequences.pop();
  // console.log(x);
  return x;
 


};

hamming(1000)






module.exports = hamming;
