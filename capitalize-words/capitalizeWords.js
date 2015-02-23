var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var words = line.split(" ");
        var output = "";
        for (var i = 0; i < words.length; i++) {
            output += words[i][0].toUpperCase() + words[i].substring(1) + ' ';
        }
        console.log(output);
    }
});