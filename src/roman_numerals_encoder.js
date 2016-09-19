/*
Symbol  I V X  L  C   D   M
Value   1 5 10 50 100 500 1,000
*/

module.exports =
function solution(number){
  if(number >= 5000 || number < 0){
    return false;
  }
  function innerExtraArg(number, romanStr){
    let numbers = (number + '').split('').map(Number);
    if(numbers.length === 0 || number < 0){
      return romanStr;
    }
    let numZero = numbers.length - 1;
    let currNum = numbers.shift();
    romanStr = romanStr + toRoman(currNum, numZero);
    let newNumber = numbers.length ? +numbers.join('') : -1;
    return innerExtraArg(newNumber, romanStr);
  }
  return innerExtraArg(number, '');
};

function toRoman(currNum, numZero){
  let BASE_ONES = ['I', 'X', 'C', 'M'];
  let BASE_FIVES = ['V', 'L', 'D'];
  let BASE_TENS = ['X', 'C', 'M'];
  let baseOne = BASE_ONES[numZero];
  let baseFive = BASE_FIVES[numZero];
  let baseTen = BASE_TENS[numZero];
  let result = '';
  if (currNum <= 3){
    for(let i = 0; i < currNum; ++i){
      result += baseOne;
    }
  } else if (currNum === 4){
    result = result + baseOne + baseFive;
  } else if (currNum === 5){
    result = result + baseFive;
  } else if (currNum === 9){
    result = result + baseOne + baseTen;
  } else if(currNum > 5){
    result += baseFive;
    for(let i = 0; i < currNum - 5; ++i){
      result += baseOne;
    }
  }
  return result;
}

