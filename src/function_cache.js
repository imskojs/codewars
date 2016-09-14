function cache(func) {
  var saved = {};
  return function() {
    var args = JSON.stringify(arguments);
    if (!saved.hasOwnProperty(args)) {
      return saved[args] = func.apply(this, arguments);
    } else {
      return saved[args];
    }
  };
}