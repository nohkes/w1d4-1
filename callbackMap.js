var words = ["ground", "control", "to", "major", "tom"];

function map(arr, callback) {

  var newArr = [];

  for (word of arr) {

    newArr.push(callback(word));

  }

  console.log(newArr);

}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
