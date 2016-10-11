function pigIt(str){
  //Code here
  return str.split(' ')
    .map(str => {
      let first = str[0];
      let rest = str.substring(1);
      return rest + first + 'ay';
    })
    .join(' ');
}





module.exports = pigIt;