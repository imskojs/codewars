
var sum_pairs = function(ints, s){
  // 몇번째 index인지 알필요 없음.
  // array 존재하는 서로 다른 index의 값이 s 이면 됨.
  // 2번째 index 가 작아야함.

  let savedObj = {};
  for(let i = 0; i < ints.length; ++i){
    let int = ints[i];
    let diff = s - int;
    if(savedObj[diff] !== undefined){
      return [diff, int];
    }
    savedObj[int] = true;
  }
};
module.exports = sum_pairs;