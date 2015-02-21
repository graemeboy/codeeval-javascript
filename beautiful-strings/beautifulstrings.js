var fs  = require("fs");
var foundChars = [];

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(findBeauty(line));
    }
});

function findBeauty(stringIn) {
    stringIn = stringIn.toUpperCase();
    var foundLetters = {}, curChar, sortedKeys, beauty = 0,
        numUsed, maxForKey = 26;

    for (var i = 0; i < stringIn.length; i++) {
        curChar = stringIn[i];
        if (isLetter(curChar)) {
            if (typeof foundLetters[curChar] != 'undefined') {
                foundLetters[curChar] += 1;
            } else {
                foundLetters[curChar] = 1;
            }
        }
    }

    sortedKeys = getSortedKeys(foundLetters);
    for ( var i = 0; i < sortedKeys.length; i++) {
        numUsed = foundLetters[sortedKeys[i]];
        beauty += numUsed * maxForKey;
        maxForKey -= 1;
    }
    return beauty;
}

function isLetter(curChar) {
    var charCode = curChar.charCodeAt(0);
    return (charCode > 64 && charCode < 91);
}

function getSortedKeys(obj) {
    var keys = []; for(var key in obj) keys.push(key);
    return keys.sort(function(a,b){return obj[b]-obj[a]});
}