module.exports = (recipe, available) => {
    let resultArray = [];
    for(let key in recipe){
      resultArray.push(Math.floor((available[key] ? available[key] : 0) / recipe[key]));
    }
    let result = Math.min.apply(Math, resultArray);
    return result;
};