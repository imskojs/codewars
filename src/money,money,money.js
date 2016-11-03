module.exports = function(principal, interest, tax, desired) {
  // console.log("Math.log10 :::\n", Math.log10);
  let numerator =  Math.log10((desired / principal));
  let denominator = Math.log10((1 + interest - interest * tax));
  let year = numerator / denominator;
  return Math.ceil(year);
};