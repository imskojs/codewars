function queueTime(customers, n) {
  var tills = [];
  for(var i = 0; i < n; ++i){
    tills.push(0);
  }
  for(i = 0; i < customers.length; ++i){
    var customerTime = customers[i];
    var minIndex = findMinimumTillIndex(tills);
    tills[minIndex] = tills[minIndex] + customerTime;
  }
  return Math.max.apply(null, tills);

}

function findMinimumTillIndex(tills){
  var minValue;
  var minIndex;
  for(var i = 0; i < tills.length; ++i){
    if(minValue === undefined){
      minValue = tills[i];
      minIndex = i;
    } else if(minValue > tills[i]){
      minValue = tills[i];
      minIndex = i;
    }
  }
  return minIndex;
}

module.exports = queueTime;




