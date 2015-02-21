var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        //findPermutations(line);
        console.log(findPermutations(line));
    }
});

function findPermutations(line) {
    return combineChars(line.split(""));
}

function findCombs(chars) {

}

function combineChars (chars) {

    // for (var i = 0; i < chars.length; i++) {

    // }

    if (chars.length <= 1) {
        return chars[0];
    }

    console.log("init chars", chars);
    var nextChars = combineChars(chars.slice(1));
    console.log("next chars", nextChars);
    console.log("chars", chars);

    var combination = [];

    for (var j = 0; j < nextChars.length; j++) {
        for (var i = 0; i < chars.length; i++) {
            combination.push(chars[i] + nextChars[j]);
        }
    }
    //     for (var j = 0; j < nextChars[0].length; j++) {
    //         console.log("new comb?", chars[i] + nextChars[j]);
    //     }
    return combination;
    // //console.log("combination", chars[0] + nextChars)

    // return chars;


    // var combination = [];
    // for (var j = 0; j < nextChars.length; j++) {
    //     for (var i = 0; i < chars.length; i++) {
    //         console.log("new combo?", chars[i] + nextChars[j]);
    //         combination.push(chars[i] + nextChars[j]);
    //     }
        
    // }

    // return combination;

}