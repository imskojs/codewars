module.exports = (n) => {
  let nums = n.toString().split('').map(Number);
  let i = nums.length % 2 === 0 ? 0 : 1;
  for(i; i < nums.length; i += 2){
    let double = nums[i] * 2;
    nums[i] = double > 9 ? double - 9 : double;
  }
  let total = nums.reduce((cur, next) => {
    return cur + next;
  });
  return total % 10 === 0 ? true : false;
};