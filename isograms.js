function isIsogram(str){
  str = str.toLowerCase()
  let set = new Set(str)
  return [...set].join("") == str
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));