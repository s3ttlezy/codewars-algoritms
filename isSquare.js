const isSquare = function(n){
  return n < 0 ? false : Math.round(Math.sqrt(n)) == Math.sqrt(n) ? true : false
}
console.log(isSquare(-1))
console.log(isSquare(0))
console.log(isSquare(3))
console.log(isSquare(4))
console.log(isSquare(25))
console.log(isSquare(26))