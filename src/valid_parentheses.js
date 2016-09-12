module.exports = (parens) => {
  // If opening bracket add
  // if closing bracket subtract
  // if negative at any point then not valid
  // if positive then not valid
  // if 0 then valid

  let count = 0;
  for(let i = 0; i < parens.length; ++i){
    let paren = parens[i];
    if(paren === '('){
      ++count;
    } else if (paren === ')'){
      --count;
    }
    if(count < 0) {
      return false;
    }
  }
  return count === 0 ? true : false;
};