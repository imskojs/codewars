module.exports = (n) => {
  if(n % 2 === 0 || n < 0){
    return null;
  }
  let numbersAbove = Math.floor(n / 2);
  let baseStars = createBaseStars(n);
  let baseStarsArray = baseStars.split('');
  let resultArray = [baseStars+'\n'];
  // let stars = baseStars;
  for(let i = 0; i < numbersAbove; ++i){
    let currentStarsArray = baseStarsArray.slice();
    for(let j = 0; j <= i; ++j){
      currentStarsArray[j] = ' ';
      currentStarsArray[currentStarsArray.length - 1 - j] = ' ';
    }
    currentStarsArray[currentStarsArray.length - 1] = '\n';
    resultArray.push(currentStarsArray.join(''));
    resultArray.unshift(currentStarsArray.join(''));
  }
  return resultArray.join('');


  function createBaseStars(n){
    let baseStars = '';
    for(let i = 0; i < n; ++i){
      baseStars += '*';
    }
    return baseStars;
  }
};