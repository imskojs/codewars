module.exports = 

function score(dice){
  let SCORES = {
    1: 1000,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
  };

  dice = dice.sort((a, b) => a - b);
  let arrays = [];
  let base = 0;
  for(let i = 0; i < dice.length - 1; ++i){
    let current = dice[i];
    let next = dice[i + 1];
    if(current !== next){
      arrays.push(dice.slice(base, i + 1));
      base = i + 1;
    }
    if(i === dice.length - 2){
      arrays.push(dice.slice(base));
    }
  }
  let totalScores = 0;
  arrays.forEach((array) => {
    let num = array[0];
    let length = array.length;
    if(length >= 3){
      totalScores += SCORES[num];
    }
    if(length < 3){
      if(num === 1){
        totalScores = totalScores + length * 100;
      } else if (num === 5){
        totalScores = totalScores + length * 50;
      }
    } 
    if (length > 3){
      if(num === 1){
        totalScores = totalScores + (length % 3) * 100;
      } else if (num === 5){
        totalScores = totalScores + (length % 3) * 50;
      }
    }

  });
  return totalScores;
};