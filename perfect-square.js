function findNextSquare(sq) {
  let res = Math.sqrt(sq);
  return (res ^ 0) === res ? (res+1)**2 : -1
}

findNextSquare(150)