module.exports = 
function palindromeChainLength(n){
  function innerExtraArg(n, count){
    if(isPalindrome(n)){
      return count;
    }

    let rev = +(n + '').split('').reverse().join('');
    return innerExtraArg(n + rev, ++count);
  }
  return innerExtraArg(n, 0);
  
  function isPalindrome(n){
    n = n + '';
    return  n === n.split('').reverse().join('');
  }
};

