var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var lineArr = line.split(" ");
        console.log(lineArr[lineArr.length - 2]);
    }
});