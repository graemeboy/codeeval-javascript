var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var words = ["zero","one","two","three","four","five","six","seven","eight","nine"];
        var wordsIn = line.split(";");
        var output = '';
        for (var i = 0; i < wordsIn.length;i++) {
            for (var j = 0; j < words.length; j++) {
                if (words[j] == wordsIn[i]) {
                    output += j;
                    break;
                }
            }
        }
        console.log(output);
    }
});