module.exports =

function stripUrlParams(url, paramsToStrip){
  // strip duplicate params
  let urls = url.split('?');
  let host = urls[0];
  let query = urls[1];
  if(!query){
    return url;
  }
  let queries = query.split('&');
  let letters = queries.map(val =>  val.split('=')[0]);
  letters.reduceRight((prev, curr, index, array) => {
    let prevIndex = index + 1;
    if(array.indexOf(prev) !== prevIndex){
      letters.splice(prevIndex, 1);
      queries.splice(prevIndex, 1);
    }
    // paramsToStrip
    return curr;
  });
  letters.reduceRight((prev, curr, index) => {
    let prevIndex = index + 1;
    if(Array.isArray(paramsToStrip) && paramsToStrip.indexOf(prev) !== -1){
      queries.splice(prevIndex, 1);
      letters.splice(prevIndex, 1);
    }
    return curr;
  });
  url = host + '?' + queries.join('&');
  return url;

};