module.exports = (array, toRemoveArray) => {
  let arrays = array.filter((value) => {
    if(value === toRemoveArray[0]){
      return false;
    } else {
      return true;
    }
  });
  return arrays;
};