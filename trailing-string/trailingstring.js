var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        //do something here
        lineArr = line.split(',');
        console.log(endsWith(lineArr[0], lineArr[1]));
    }
});

function endsWith(line,match) {
    var index = line.indexOf(match);
    //console.log(line, match, index);
    if (index === -1) { // fail fast
        return 0;
    }
    for (var i = 0; i < match.length; i++) {
        //console.log(match[i], " vs ", line[i + index])
        if (line[i + index] != match[i]) {
            return 0;
        }
    }
    return 1;
}