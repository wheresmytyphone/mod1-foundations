var assert = require('chai');
var Iterator = require('./arrays');

describe('iterator', function() {

  it.skip('can be instantiated', function() {
    var factory = new Iterator();

    assert.equal(typeof factory, Iterator);
  });

  it('has a prototype function called uppercase', function() {
    var factory = new Iterator();

    assert.equal(typeof factory.createArray, 'function');
  });

  it.skip('using FOR EACH can create a string from an array of strings', function() {
    var factory = new Iterator();

    assert.equal(factory.createArray(['hello', 'world', 'happy', 'monday']), 'hello world happy monday');

    assert.equal(factory.createArray([10, 20, 30, 40, 50]), 150);
  });

  it.skip('can create a string of YELLING UPPER CASE words using FOR EACH', function() {
    var factory = new Iterator();

    assert.equal(factory.yell(["one, ", "two, ", "three"]), "ONE! TWO! THREE!");

    assert.equal(factory.yell(["hey, ", "what's ", "up"]), "HEY! WHATS! UP!");
  });

  it.skip('using FOR EACH can reverse an array and create a string', function() {
    var factory = new Iterator();

    assert.equal(factory.reverseAndString([1, 2, 3, 4, 5]), '5 4 3 2 1');

    assert.equal(factory.reverseAndString([10, 11, 12, 13, 14]), '14 13 12 11 10');
  })

  it.skip('using FOR EACH can sum a bunch of numbers', function() {
    var factory = new Iterator();

    assert.equal(factory.sum([1, 2, 3, 4, 5, 6]), 21);

    assert.equal(factory.sum([7, 8, 9, 10, 11, 12]), 57);
  });

  it.skip('using FOR EACH can square every number in a collection and then sum them', function() {
    var factory = new Iterator();

    assert.equal(factory.squareAndSum([1, 2, 3, 4, 5, 6]), 91);
  });

  it.skip('can FILTER words that contain the letter m', function() {
    var factory = new Iterator();

    assert.equal(factory.onlyOdds(['tomato', 'pizza', 'squash', 'hamburger']), ['tomato', 'hamburger']);

    assert.equal(factory.onlyOdds([7, 8, 9, 10, 11, 12]), [7, 9, 11]);
  });

  it.skip('can FILTER out odd numbers from a collection of integers', function() {
    var factory = new Iterator();

    assert.equal(factory.onlyEvens([1, 2, 3, 4, 5, 6]), [2, 4, 6]);

    assert.equal(factory.onlyEvens([7, 8, 9, 10, 11, 12]), [8, 10, 12]);
  });

  it.skip('can FILTER out even numbers from a collection of integers', function() {
    var factory = new Iterator();

    assert.equal(factory.onlyOdds([1, 2, 3, 4, 5, 6]), [1, 3, 5]);

    assert.equal(factory.onlyOdds([7, 8, 9, 10, 11, 12]), [7, 9, 11]);
  });

  it.skip('can FILTER out strings shorter or equal to 4 letters', function() {
    var factory = new Iterator();

    assert.equal(factory.shortWords(['potato', 'bird', 'ham', 'lasagna', 'pants', 'bro', 'consternation']), ['bird', 'ham', 'bro']);
  });

  it.skip('can return a new array of uppercase strings using MAP', function() {
    var factory = new Iterator();

    assert.equal(factory.uppercaseArray(['potato', 'bird', 'ham', 'pants']), ['POTATO', 'BIRD', 'HAM', 'PANTS']);
  });

  it.skip('can return a new array of integers that are increased by 10 using MAP', function() {
    var factory = new Iterator();

    assert.equal(factory.addTen([1, 2, 3, 4, 5]), [11, 12, 13, 14, 15]);
  });

  it.skip('can return an array of data types based on each element', function() {
    var factory = new Iterator();

    assert.equal(factory.dataTypes(['potato', 1, true, 'lasagna', 444, null]), ["string", "number", "boolean", "string", "number", "object"]);
  });

  it.skip('can FILTER out strings shorter or equal to 4 letters', function() {
    var factory = new Iterator();

    assert.equal(factory.longWords(['potato', 'bird', 'ham', 'lasagna', 'pants', 'bro', 'consternation']), ['bird', 'ham', 'bro']);
  });

  it.skip('can FILTER for meals that contain basil', function() {
    var factory = new Iterator();

    var meals = [
    { name: 'Lasagna', vegetarian: true, ingredients: ['tomatoes', 'basil', 'cheese'] },
    { name: 'Pizza', vegetarian: true, ingredients: ['basil', 'tomatoes', 'cheese'] },
    { name: 'Goulash', vegetarian: false, ingredients: ['tomatoes', 'meat'] },
    { name: 'Bean and Rice', vegetarian: true, ingredients: ['beans', 'rice'] },
    ];

    var search = 'basil'

    var expected = { name: 'Pizza', vegetarian: true, ingredients: ['basil', 'tomatoes', 'cheese'] }

    assert.equal(factory.getFood(meals, search), expected)
  });

  it.skip('can SORT an array of numbers', function() {
    var factory = new Iterator();

    assert.equal(factory.sorted([5, 2, 6, 3, 1]), [1, 2, 3, 5, 6]);
    assert.equal(factory.sorted([8, 10, 12, 7, 3]), [3, 7, 8, 10, 12]);
  });

  it.skip('can SORT an array of numbers in reverse order', function() {
    var factory = new Iterator();

    assert.equal(factory.sorted([5, 2, 6, 3, 1]), [6, 5, 3, 2, 1]);
    assert.equal(factory.sorted([8, 10, 12, 7, 3]), [12, 10, 8, 7, 3]);
  });

  it.skip('can SORT an array of strings', function() {
    var factory = new Iterator();

    assert.equal(factory.sorted(['zoo', 'apple', 'zucchini', 'potato', 'beets']), ['apple', 'beets', 'potato', 'zoo', 'zucchini']);
  });

  it.skip('can MAP over a SORTED array returning meals in order of most ingredients ', function() {
    var factory = new Iterator();

    var meals = [
    { name: 'Lasagna', vegetarian: true, ingredients: ['tomatoes', 'basil', 'cheese'] },
    { name: 'Pizza', vegetarian: true, ingredients: ['basil', 'tomatoes', 'cheese', 'olives'] },
    { name: 'Goulash', vegetarian: false, ingredients: ['tomatoes', 'meat'] },
    { name: 'Beans & Rice', vegetarian: true, ingredients: ['beans', 'rice'] },
    ];

    var expected = ['Pizza', 'Lasagna', 'Goulash', 'Beans & Rice']

    assert.equal(factory.sortByIngredients(meals), expected);
  });

});
