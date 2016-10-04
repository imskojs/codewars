function titleCase(title, minorWords) {
  let titles = title.toLowerCase().split(' ');
  let minors = minorWords ? minorWords.toLowerCase().split(' ') : [];
  let answers = titles.map((str, i) => {
    if(!str){
      return '';
    }
    if(i === 0){
      return upperFirst(str);
    } else {
      if(minors.indexOf(str) !== -1){
        return str;
      } else {
        return upperFirst(str);
      }
    }
  });
  return answers.join(' ');
}

function upperFirst(str){
  return str[0].toUpperCase() + str.substring(1);
}


module.exports = titleCase;

