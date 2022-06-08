function disemvowel(str) {
    strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].toLowerCase() == "e") {
            delete strArr[i];
        } else if (strArr[i].toLowerCase() == "o") {
            delete strArr[i];
        } else if (strArr[i].toLowerCase() == "i") {
            delete strArr[i];
        } else if (strArr[i].toLowerCase() == "a") {
            delete strArr[i];
        } else if (strArr[i].toLowerCase() == "u") {
            delete strArr[i];
        }
    };
    console.log(strArr.join(''));
}
disemvowel("this website is for losers LOL!");