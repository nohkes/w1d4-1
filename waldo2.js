function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(arr[i], i);   // use forEach
  // }
  arr.forEach(function(name, index){
  	if(name === "Waldo")
  		found(index)
  })
}

function actionWhenFound(index) {

  console.log("Found Waldo at index " + index + "!" );
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);