module.exports = (str) => {
  let nX = 0;
  let nO = 0;
  for(let i = 0; i < str.length; ++i){
    if(str[i].toUpperCase() === 'X'){
      ++nX;
    } else if(str[i].toUpperCase() === 'O') {
      ++nO;
    }
  }
  return nX === nO;
};