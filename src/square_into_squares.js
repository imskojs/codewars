function decompose(n) {
  let goal = 0;
  let result = [n];
  while(result.length){
    let current = result.pop();
    goal = goal + Math.pow(current, 2);
    for(let i = current - 1; i >= 0; i--){
      if(goal - Math.pow(i, 2) >= 0){
        goal = goal - Math.pow(i, 2);
        result.push(i);
        if(goal === 0){
          result.sort((a, b) => a - b);
          return result;
        }
      }
    }
  }
  return null;
}



module.exports = decompose;