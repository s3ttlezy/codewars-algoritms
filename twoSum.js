function twoSum(numbers, target) {
  let result = numbers.map(() => {
    for (let i = 0; i < numbers.length; i++) {
      let cur = numbers[i]
      for (let j = 1; j < numbers.length; j++) {
        if (cur + numbers[j] === target) {
          return [ i, j ]
        }
      }
    }
  })
  return result[0]
}

console.log(twoSum([1,2,3], 4).sort(numericalCompare), 1 + 3)

console.log(twoSum([1234,5678,9012], 14690).sort(numericalCompare), 5678 + 9012)

console.log(twoSum([2,2,3], 4).sort(numericalCompare), 2 + 2)

function numericalCompare(a, b) {
  return a - b
}