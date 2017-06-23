function Iterator(input) {

}
Iterator.prototype.createArray = function(arr) {
  // input.toString()

  if (typeof arr[0] === 'number' ) {
    var total = 0
    arr.forEach(function(num){
      total += num;
    })
    return total
  } else if (typeof arr[0] === 'string') {
    var text = ''
    arr.forEach(function(word, i){
      if (i === arr.length - 1) {
      text += word
    } else {
      text += word + ' ';
    }
    })
    return text
  }
}

Iterator.prototype.yell = function(words) {

  var text = ''
  words.forEach(function(word, i){
    if (i === words.length - 1) {
    text += word.toUpperCase() + '!';
  } else {
    text += word.substring(0, word.length - 2 ).toUpperCase() + '! '
  }
  })
  return text
}

Iterator.prototype.sum = function(arr){
  var total = 0;
  arr.forEach(function(num){
    total += num;
  })
  return total
}

Iterator.prototype.squareAndSum = function(arr){
  var total = 0;
  arr.forEach(function(num){
    total += num * num;
  })
  return total
}

Iterator.prototype.onlyEvens = function(arr) {
 var evennums = arr.filter(function(num) {
   return num % 2 === 0;
 })
 return evennums
}

Iterator.prototype.onlyOdds = function(arr) {
 var evennums = arr.filter(function(num) {
   return num % 2 !== 0;
 })
 return evennums
}

Iterator.prototype.shortWords = function(arr) {
  var shortWords = arr.filter(function(word) {
    return word.length <= 4;
  })
  return shortWords
}

Iterator.prototype.uppercaseArray = function(arr) {
  var caps = arr.map(function(word){
    return word.toUpperCase()
  })
  return caps
};

Iterator.prototype.addTen = function(arr) {
  var sums = arr.map(function(num) {
    return num + 10;
  })
  return sums
};

Iterator.prototype.dataTypes = function(arr) {
  var data = arr.map(function(item) {
    return typeof item
  })
  return data
};

Iterator.prototype.getFood = function (arr, searchTerm) {
  var hasIngredient = arr.filter(function(meal){
    return meal.ingredients.includes(searchTerm)
  })
  return hasIngredient
};

Iterator.prototype.sorted = function(arr) {
  var nums = arr.sort(function(a, b) {
    return a > b
  })
  return nums
};

Iterator.prototype.sorted2 = function(arr) {
  var nums = arr.sort(function(a, b) {
    return a < b
  })
  return nums
};

Iterator.prototype.sortByIngredients = function (arr) {
  var sorted = arr.sort(function (a, b){
    return a.ingredients.length < b.ingredients.length
  })
  var mealnames = sorted.map(function(meal){
    return meal.name
  })
  return mealnames
};


module.exports = Iterator;
