module.exports = 

function nextBigger(n){
  let nums = ('' + n).split('').map(Number);
  let swapPosition = -1;
  let highest = [];
  for(let i = nums.length - 1; i >= 0; --i){
    if(i < swapPosition){break;}
    for(let j = i - 1; j >= swapPosition; --j ){
      if(nums[j] < nums[i]){
        let wipNums = nums.slice();
        let toSwap = wipNums[j];
        wipNums[j] = wipNums[i];
        wipNums[i] = toSwap;
        swapPosition = j;
        if(+highest.join('') > +wipNums.join('') || highest.length === 0){
          highest = wipNums;
        }
      }
    }
  }
  if(swapPosition === -1){
    return -1;
  }
  // use Radix sort for opt
  let right = highest.slice(swapPosition + 1).sort(/*(a, b) => a - b*/);
  let left = highest.slice(0, swapPosition + 1);
  let result = +left.concat(right).join('');
  return result;
};
//====================================================
//  Found largest using Steinhaus-Johnso-Trotter algorithm
// which was not what was asked.
//====================================================
//https://en.wikipedia.org/wiki/Steinhaus%E2%80%93Johnson%E2%80%93Trotter_algorithm
// function nextBigger(n){
//   let nums = (n + '').split('').map(numStr => +numStr);

//   function permute(nums, matrix){
//     if(nums.length === 0){
//       return matrix;
//     }
//     let numToInsert = nums.shift();
//     let newMatrix = [];
//     matrix.forEach((array, i) => {
//       // 0 is odd; 1 is even
//       if(i % 2 === 0){
//         // when odd
//         for(let i = array.length; i >= 0; --i){
//           let copiedArray = array.slice();
//           copiedArray.splice(i, 0, numToInsert);
//           newMatrix.push(copiedArray);
//         }
//       } else {
//         // when even
//         for(let i = 0; i <= array.length; ++i){
//           let copiedArray = array.slice();
//           copiedArray.splice(i, 0, numToInsert);
//           newMatrix.push(copiedArray);
//         }
//       }
//     });
//     return permute(nums, newMatrix);
//   }

//   let matrix = permute(nums, [[]]);

//   let resultArray = matrix.reduce((curr, next) => {
//     let curNum = +curr.join('');
//     let nextNum = +next.join('');
//     if(curNum > nextNum){
//       return curr;
//     } else {
//       return next;
//     }
//   });
//   return +resultArray.join('');


// };



