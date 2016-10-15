// Not working below code is to see what's in the code.
var BuildBomb = function (global){
  var myWireVar = 'boom'+~~(Math.random()*10);

  var bomb = function(){

    this.Explode = function(){
      var myWire = 0;
      eval('myWire = ' + myWireVar + ';');
      console.log('The wire was "cut":');
      Test.expect(typeof myWire === 'undefined', 'BOOM! You failed to cut the wire!');
    };

    this.CutTheWire = function(wireCode){
      var myWire = 0;
      eval('myWire = ' + myWireVar + ';');
      console.log('A numeric wireCode is specified:');
      Test.expect(typeof wireCode === 'number', 'BOOM! You have to specify the number ID of the wire to cut.');
      console.log('Correct wireCode is specified:');
      Test.expect(wireCode === myWire, 'BOOM! You cut the wrong wire!');
      eval.call(global, 'var ' + myWireVar + ' = undefined;');
    }; 

  };

  eval.call(global, 'var ' + myWireVar + ' = ' + Math.random() + ';');
  global.bomb = new bomb();
  return global.bomb;
} ;

