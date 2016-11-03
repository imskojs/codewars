function undoRedo(object) {
  const stateObj = {
    states: [Object.assign({}, object)],
    index: 0
  };

  return {
    get: function(key) {
      return object[key];
    },

    set: function(key, value) {
      if(object.hasOwnProperty(key) && object[key] === value){
        return;
      }
      object[key] = value;
      const clone = Object.assign({}, object);
      stateObj.states[++stateObj.index] = clone;
    },

    del: function(key) {
      if(!object.hasOwnProperty(key)){
        return;
      }
      delete object[key];
      const clone = Object.assign({}, object);
      stateObj.states[++stateObj.index] = clone;
    },

    undo: function() {
      if(stateObj.index === 0){
        throw new Error('Nothing to Undo');
      }
      const index = --stateObj.index;
      resetTo(stateObj.states[index]);
    },

    redo: function() {
      if(stateObj.states.length - 1 === stateObj.index){
        throw new Error('Nothing to Redo');
      }
      const index = ++stateObj.index;
      resetTo(stateObj.states[index]);
    }
  };

  //====================================================
  //  Helper function
  //====================================================
  function resetTo(clone){
    for(var key in object){
      delete object[key];
    }
    // side effect
    Object.assign(object, clone);
  }

}

module.exports = undoRedo;