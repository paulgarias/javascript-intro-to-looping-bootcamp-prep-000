function forLoop(array) {
  var newArray = array;
  for(var i = 1; i<=25; i++){
    newArray.push("I am ${i} strange loops.")
  }
  return newArray;
}

function whileLoop(n) {
  while(n>0){
    console.log(n--)
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while(array.length >= 0 && maybeTrue())
  return array 
}

