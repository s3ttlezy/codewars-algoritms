function duplicateCount(text){
  let arr = text.toLowerCase().split("")
  let repeatCounts = 0;
  let matches = {};
  for ( let i = 0; i < arr.length; i++ ) {
    for (let j = i+1; j < arr.length; j++) {
      if ( arr[i] == arr[j]) {
        repeatCounts += 1;
        matches[arr[i]] = repeatCounts;
      }
    }
  }
  return Object.keys(matches).length
}