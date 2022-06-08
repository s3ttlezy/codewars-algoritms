function withoutRepeat(arr) {
  let set = new Set();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i])
  }
  for (let value of set) {
    result.push(arr)
  }
  return result;
}

function linearWithoutRepeat(arr) {
  const result = []
  const dictionary = {}
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    dictionary[item] = dictionary[item] ? dictionary[item] + 1 : 1;
  }
  console.log(dictionary);
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (dictionary[item] === 1) {
      result.push(item);
    }
  }
  return result;
}

// console.log(withoutRepeat([1,1,2,2,4,4,5]))
console.log(linearWithoutRepeat([1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 6, 7, 8 , 9, 9]))