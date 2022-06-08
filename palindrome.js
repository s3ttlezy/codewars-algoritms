

function palindrome(word) {
  word = word.toLowerCase();
  for (let i = 0; i< word.length / 2; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function palindrome1(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("")
}

console.log(palindrome("kaka"))
console.log(palindrome1("akka"))