function listToArray(list){
  var answer = [];

  function inner(list){
    answer.push(list.value);
    if(list.next === null){
      return false;
    }
    inner(list.next);
  }



  inner(list);

  return answer;





}


module.exports = listToArray;


