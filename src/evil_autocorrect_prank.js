module.exports = (input) => {
  let strs = input.split(' ');
  for(let i = 0; i < strs.length; ++i){
    let words = strs[i].split('');
    if(isYou(words) && isRestPunc(words)){

      strs[i] = words.slice(3) ? 'your sister' + words.slice(3).join('') : 'your sister';

    } else if(isYou(words) && (rightPartIsU(words, 3) || isRestPunc(words))){

      let lastIndex = words.map(String.prototype.toUpperCase.bind(String)).lastIndexOf('U');
      strs[i] = words.slice(lastIndex + 1).length && lastIndex !== -1 ? 
        'your sister' + words.slice(lastIndex + 1).join('') :
        'your sister';
    } else if(isU(words) && words.length === 1){
      strs[i] = 'your sister';
    } else if (isU(words) && rightPartIsU(words, 1)){
      // strs[i] = 'your sister';
    }
    
  }
  return strs.join(' ');

  function isYou(words){
    if (
      words[0].toUpperCase() === 'Y' &&
      words[1].toUpperCase() === 'O' &&
      words[2].toUpperCase() === 'U'
    ) {
      return true;
    } else {
      return false;
    }
  }

  function isRestPunc(words){
    let rest = words.slice(3);
      let metCondition = rest.every((word) => {
        if(word === '!' || word === '?' || word === ',' || word === '.' ){
          return true;
        } else {
          return false;
        }
      });
      if(metCondition || words[3] === undefined){
        return true;
      }
  }

  function isU(words){
    if(words[0].toUpperCase() === 'U'){
      return true;
    } else {
      return false;
    }
  }

  function rightPartIsU(words, index){
    let wordsArray = words.slice(index);
    return wordsArray.every((word) => {
      return word.toUpperCase() === 'U' ||
      word === '!' || word === '?' || word === ',' || word === '.';
    });
  }

};