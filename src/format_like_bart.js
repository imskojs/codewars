module.exports = (names) => {
  let result = '';
  for(let i = 0; i < names.length; ++i) {
    let name = names[i].name;

    if(i === names.length - 2){
      result = result + name + ' & ';
    } else if (i === names.length - 1){
      result = result + name;
    } else {
      result = result + name + ', ';
    }
  }
  return result;
};