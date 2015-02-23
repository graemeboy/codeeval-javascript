var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(combineChars(line).sort().join(","));
    }
});

function combineChars (chars) {
    var permutations = [], words = [], firstChar;
    if (chars.length === 1) { // base case
        permutations.push(chars);
        return permutations;
    }
    firstChar = chars[0];
    chars = chars.substring(1,chars.length);
    words = combineChars(chars);
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length + 1; j++) {
            permutations.push(insertCharAt(words[i], firstChar, j));
        }
    }
    return permutations;
}

function insertCharAt(word, charIn, i) {
    var start = word.substring(0,i);
    var end = word.substring(i,word.length);
    return start + charIn + end;
}