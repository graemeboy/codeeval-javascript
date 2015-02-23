var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var lineArr = line.split(",");
        var compChar = lineArr[1];
        var line = lineArr[0];
        for (var i = line.length; i >= 0; i--) {
            if (line[i] == compChar) {
                console.log(i);
                return;
            }
        }
        console.log('-1');
    }
});