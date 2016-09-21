// whatisup
//    t  up
// wh  i
//    t su
//   at s
//  ha    p
//    tis
// wh   s
module.exports = 
function recoverSecret(triplets){
  // console.log("triplets :::\n", triplets);
  if(triplets.length === 1){
    return triplets[0].join('');
  }
  triplets[0] = triplets.reduce((triplet0, triplet1, jndex) => {
    // if all items in triplet1 exists in triplet0 remove triplet1
      // console.log("triplet1 :::\n", triplet1);
    if(triplet1.every(val => triplet0.indexOf(val) !== -1 )){
      triplets.splice(jndex, 1);
      return triplet0;
    } 
    // if tirplet1[>0 = z] item is triplet0[0] then triplet1[<z] go front
    let front = triplet0[0];
    let sliceTo = 0;
    for(let i = 1; i < triplet1.length; ++i){
      if(triplet1[i] === front){
        sliceTo = i;
      }
    }
    if(sliceTo){
      let front1 = triplet1.slice(0, sliceTo);
      triplet0 = front1.concat(triplet0);
      return triplet0;
    }
    // if tirplet1[0] item is triplet0[last] then triplet1[>0] go back

    let last = triplet0[triplet0.length -1];
    let sliceFrom = 2;
    for(let i = 0; i < triplet1.length - 1; ++i){
      if(triplet1[i] === last){
        sliceFrom = i;
      }
    }
    if(sliceFrom !== 2){
      let last1 = triplet1.slice(sliceFrom + 1);
      triplet0 = triplet0.concat(last1);
      return triplet0;
    }

    let i = triplet0.indexOf(triplet1[0]);
    let j = triplet0.indexOf(triplet1[triplet1.length -1]);
    if((j - i) === 1){
      triplet0.splice(j, 0, triplet1[1]);
      // return triplet0;
    }

    return triplet0;

  });
  return recoverSecret(triplets);

};