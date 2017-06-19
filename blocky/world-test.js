var assert = require('chai').assert;
var World = require('./world.js')
var Block = require('./blocky.js')

describe('World', function () {

  it('should be a function', function () {
    assert.isFunction(World);
  });

  it('should instantiate an object', function () {
    var world = new World();
    assert.isObject(world);
  });

  it('should take take the first argument and set it as the "width" property of the instantiated object', function() {
    var world = new World(50)
    assert.equal(world.width, 50)
});

  it('should take take the second argument and set it as the "height" property of the instantiated object', function() {
    var world = new World(50, 75);
    assert.equal(world.height, 75)
  });

  it('should have a "blocks" property, which starts out as an empty array', function () {
    var world = new World(100, 100);
    assert.isArray(world.blocks);
    assert.deepEqual(world.blocks, []);
  });

  it('should have a method to add a new block to the world', function () {
    var world = new World(100, 100);
    var block = new Block(15, 30);
    world.addBlock(block);
    assert.equal(world.blocks.length, 1);
    assert.deepEqual(world.blocks, [{x: 15, y: 30}]);
  });

});
