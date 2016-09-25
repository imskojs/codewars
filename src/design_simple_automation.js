function Automaton()
{
   this.states = ['q1', 'q2', 'q3'];
}

Automaton.prototype.readCommands = function(...commands) {
  // Return true if we end in our accept state, false otherwise.
  // q1
  //   1 -> q2  , 0 -> q1
  // q2
  //   0 -> q3  , 1 -> q2
  // q3
  //   0 -> q2  , 1 -> q2
  console.log(commands);
  let innitialCommands = commands.slice();
  let recurse = (currentState, commands) => {
    let nextState = '';
    if(innitialCommands.length === 0){
      return false;
    }
    if(commands.length === 0){
      return currentState;
    }
    let currentCommand = commands.shift();
    if(currentState === this.states[0]){
      if(currentCommand == '0'){
        nextState = this.states[0];
      } else {
        nextState = this.states[1];
      }
    } else if(currentState === this.states[1]){
      if(currentCommand == '0'){
        nextState = this.states[2];
      } else {
        nextState = this.states[1];
      }
    } else if(currentState === this.states[2]){
      nextState = this.states[0];
    }
    return recurse(nextState, commands);
  };

  return recurse(this.states[0], commands) === this.states[1];

};

var myAutomaton = new Automaton();

// Do anything necessaryto set up your automaton's states, q1, q2, and q3.
module.exports = myAutomaton;