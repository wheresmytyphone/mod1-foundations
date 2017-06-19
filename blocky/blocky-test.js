var assert = require('chai').assert;
var Block = require('./blocky.js')

describe('Block', function () {

  it('should be a function', function() {
    assert.isFunction(Block);
  });

  it('should instantiate our good friend, Blocky', function () {
    var blocky = new Block();
    assert.isObject(blocky);
  });

  it('should take the first argument and set it as the "x" property of the instantiated object', function () {
    var blocky = new Block(15);
    assert.equal(blocky.x, 15);
  });

  it('should take take the second argument and set it as the "y" property of the instantiated object', function () {
    var blocky = new Block(15, 30);
    assert.equal(blocky.y, 30);
  });

  it('should take take the third argument and set it as the "height" property of the instantiated object', function () {
    var blocky = new Block(15, 30, 50);
    assert.equal(blocky.height, 50);
  });

  it('should take take the fourth argument and set it as the "width" property of the instantiated object', function () {
    var blocky = new Block(15, 30, 50, 50);
    assert.equal(blocky.width, 50);
  });

  it('should by default set the height and width to 100', function () {
    var blocky = new Block(15, 30);
    assert.equal(blocky.width, 100);
    assert.equal(blocky.height, 100);
  });

  it('should have a method called "moveRight()"', function () {
    var blocky = new Block(15, 30);
    assert.isFunction(blocky.moveRight);
  });

  it('"moveRight()" should increment the "x" property by 1', function () {
    var blocky = new Block(15, 30);
    blocky.moveRight();
    assert.equal(blocky.x, 16);
  });

  it('should have a method called "moveLeft()" ', function () {
    var blocky = new Block(15, 30);
    assert.isFunction(blocky.moveLeft);
  });

  it('"moveLeft()" should decrement the "x" property by 1', function () {
    var blocky = new Block(15, 30);
    assert.equal(blocky.x, 15);
    assert.equal(blocky.moveLeft())
    assert.equal(blocky.x, 14);
  });

  it('should have a method called "moveDown()', function () {
    var blocky = new Block(15, 30);
    assert.isFunction(blocky.moveDown);
  });

  it('"moveDown()" should increment the "y" property by 1', function () {
    var blocky = new Block(15, 30);
    assert.equal(blocky.y, 30);
    assert.equal(blocky.moveDown())
    assert.equal(blocky.y, 31);
  });

  it('should have a method called "moveUp()', function () {
    var blocky = new Block(15, 30);
    assert.isFunction(blocky.moveUp);
  });

  it('"moveUp()" should decrement the "y" property by 1', function () {
    var blocky = new Block(15, 30);
    assert.equal(blocky.y, 30);
    assert.equal(blocky.moveUp())
    assert.equal(blocky.y, 29);
  });


  // EXTENSION - Your turn to write the body of the following tests

  it.skip('should have a method called "getFatter()"');

  it.skip('"getFatter()" should increment its width by 1');

  it.skip('should have a method called "getSkinnier()"');

  it.skip('"getSkinnier()" should decrement its width by 1');

  it.skip('should have a method called "getTaller()"');

  it.skip('"getTaller()" should increment its height by 1');

  it.skip('should have a method called "getShorter()"');

  it.skip('"getShorter()" should decrement its height by 1');

  it.skip('should have a method called "grow()"');

  it.skip('"grow()" should increment both its width and height by 1');

  it.skip('should have a method called "shrink()"');

  it.skip('"shrink()" should decrement both its width and height by 1');

});
