const assert = require('chai').assert;
const expect = require('chai').expect;
const undoRedo = require('./undo_redo.js');

describe('tests', function() {

  it('get/set tests', function() {
    var obj = {
      x: 1,
      y: 2
    };
  
    var unRe = undoRedo(obj);
    
    assert.equal(unRe.get('x'), 1, 'The get method returns the value of a key');
    unRe.set('x', 3);
    assert.equal(unRe.get('x'), 3, 'The set method change the value of a key');
   });
   
   it('simple undo', function() {
     var obj = {
        x: 1,
        y: 2
      };
    
      var unRe = undoRedo(obj);
      unRe.set('y', 10);
      assert.equal(unRe.get('y'), 10, 'The get method returns the value of a key');
      unRe.undo();
      assert.equal(unRe.get('y'), 2, 'The undo method restores the previous state');
      try {
        unRe.undo();
        expect(false, 'It should have thrown an exception');
        
      } catch (e) {
        assert.equal(unRe.get('y'), 2);
      }
      
   });
   
   it('simple redo', function() {
     var obj = {
        x: 1,
        y: 2
      };
    
      var unRe = undoRedo(obj);
      unRe.set('y', 10);
      assert.equal(unRe.get('y'), 10, 'The get method returns the value of a key');
      unRe.undo();
      assert.equal(unRe.get('y'), 2, 'The undo method restores the previous state');
      unRe.redo();
      assert.equal(unRe.get('y'), 10, 'The undo method restores the previous state');
      try {
        unRe.redo();
        expect(false, 'It should have thrown an exception');
        
      } catch (e) {
        assert.equal(unRe.get('y'), 10);
      }
      
   });
   
  it('undo/redo', function() {
     var obj = {
        x: 1,
        y: 2
      };
    
      var unRe = undoRedo(obj);
      unRe.set('y', 10);
      unRe.set('y', 100);
      unRe.set('x', 150);
      unRe.set('x', 50);
      assert.equal(unRe.get('y'), 100, 'The get method returns the value of a key');
      assert.equal(unRe.get('x'), 50, 'The get method returns the value of a key');
      unRe.undo();
      assert.equal(unRe.get('x'), 150, 'The undo method restores the previous state');
      assert.equal(unRe.get('y'), 100, 'The y key stays the same');
      unRe.redo();
      assert.equal(unRe.get('x'), 50, 'Undo the x value');
      assert.equal(unRe.get('y'), 100, 'The y key stays the same');
      unRe.undo();
      unRe.undo();
      assert.equal(unRe.get('x'), 1, 'Undo the x value');
      assert.equal(unRe.get('y'), 100, 'The y key stays the same');
      unRe.undo();
      unRe.undo();
      assert.equal(unRe.get('y'), 2, 'Undo the y value');
      assert.equal(unRe.get('x'), 1, 'The x key stays the same');
      try {
        unRe.undo();
        expect(false, 'It should have thrown an exception');
        
      } catch (e) {
        assert.equal(unRe.get('y'), 2, 'There is nothing to undo');
      }
      unRe.redo();
      unRe.redo();
      unRe.redo();
      unRe.redo();
      assert.equal(unRe.get('y'), 100, 'y key redo state');
      assert.equal(unRe.get('x'), 50, 'y key redo state');
      try {
        unRe.redo();
        expect(false, 'It should have thrown an exception');
        
      } catch (e) {
        assert.equal(unRe.get('y'), 100, 'There is nothing to redo');
      }
      
   });
   
   it('new key', function() {
     var obj = {
        x: 1,
        y: 2
      };
    
      var unRe = undoRedo(obj);
      unRe.set('z', 10);
      assert.equal(unRe.get('z'), 10, 'A new key has been added');
      unRe.undo();
      assert.equal(unRe.get('z'), undefined, 'The z key should not exist');
      unRe.redo();
      assert.equal(unRe.get('z'), 10, 'A new key has been added');
   });
   
   
   it('delete key', function() {
     var obj = {
        x: 1,
        y: 2
      };
    
      var unRe = undoRedo(obj);
      unRe.del('x');
      assert.equal(unRe.get('x'), undefined, 'The x key should not exist');
      expect(!obj.hasOwnProperty('x'), 'The x key should be deleted');
      unRe.undo();
      assert.equal(unRe.get('x'), 1, 'A new key has been added');
      unRe.redo();
      assert.equal(unRe.get('x'), undefined, 'The x key should not exist');
      expect(!obj.hasOwnProperty('x'), 'The x key should be deleted');
   });
    
   
 }); 
 