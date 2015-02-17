var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(isSelfDescribing(line));
    }
});

function isSelfDescribing(line) {
    var numTable = {};
    var curNum;
    for (var i = 0; i < line.length; i++) {
        curNum = line[i];
        if (typeof numTable[curNum] == 'undefined') {
            numTable[curNum] = 1;
        } else {
            numTable[curNum] += 1;
        }
    }
    for (var i = 0; i < line.length; i++) {
        curNum = line[i];
        if (typeof numTable[i] != 'undefined') {
            if (numTable[i] != line[i]) {
                return 0;
            }
        } else {
            if (line[i] != 0) {
                return 0;
            }
        }
    }
    return 1;
}