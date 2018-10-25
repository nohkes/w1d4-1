function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
 var id = 0;

  return function() {
    /* your code here */
    let x = list[id] 
    // id += 1 
    // if (id === list.length) {
    // 	id = 0
    // } 
    id = (id + 1) % list.length
    return x   
  }

}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie()); 
console.log(rollLoadedDie()); 
console.log(rollLoadedDie()); 
console.log(rollLoadedDie()); 
console.log(rollLoadedDie()); 
console.log(rollLoadedDie()); 
console.log(rollLoadedDie()); 
console.log(rollLoadedDie()); 
