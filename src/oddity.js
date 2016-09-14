module.exports = (n) => {
  let nRoot = Math.sqrt(n);
  let results = [];
  for(let i = 1; i < Math.floor(nRoot) + 1; ++i){
    if(n % i === 0){
      results.push(i);
      if(n / i !== i){
        results.push(n / i);
      }
    }
  }
  return (results.length) % 2 === 0 ? 'even' : 'odd';
};