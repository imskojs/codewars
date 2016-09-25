
module.exports =

function parseInt(string){
  let strings = string.split(' ');
  let millionIndex = strings.indexOf('million');
  let thousandIndex = strings.indexOf('thousand');
  if(millionIndex !== -1){
    return 1000000;
  }
  let left;
  let right;
  if(thousandIndex !== -1){
    left = strings.slice(0, thousandIndex);
    right = strings.slice(thousandIndex + 1);
    let leftNum = converter(left) * 1000;
    let rightNum = converter(right);
    return leftNum + rightNum;
  } else {
    return converter(strings);
  }

};
let OBJ = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7,
  eight: 8, nine: 9, ten: 10, zero: 0,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14,
  fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18,
  nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50,
  sixty: 60, seventy: 70, eighty: 80, ninety: 90
};

function converter(strings){
  let hundredIndex = strings.indexOf('hundred');
  if(hundredIndex !== -1){
    let left = strings.slice(0, hundredIndex);
    let right = strings.slice(hundredIndex + 1);
    let leftNum = 0;
    left.forEach((string) => {
      if(string === 'and'){
        return;
      }
      if(string.includes('-')){
        string.split('-').forEach((str) => {
          leftNum = leftNum + OBJ[str];
        });
      } else {
        leftNum = leftNum + OBJ[string];
      }
    });
    leftNum = leftNum * 100;

    let rightNum = 0;
    right.forEach((string) => {
      if(string === 'and'){
        return;
      }
      if(string.includes('-')){
        string.split('-').forEach((str) => {
          rightNum = rightNum + OBJ[str];
        });
      } else {
        rightNum = rightNum + OBJ[string];
      }
    });
    return leftNum + rightNum;
  } else {
    let num = 0;
    strings.forEach((string) => {
      if(string === 'and'){
        return;
      }
      if(string.includes('-')){
        string.split('-').forEach((str) => {
          num = num + OBJ[str];
        });
      } else {
        num = num + OBJ[string];
      }
    });
    return num;
  }
}

