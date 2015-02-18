var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(findIntersection(line));
    }
});

function findIntersection(line) {
    var input = line.split(";");
    var arrA = input[0].split(',');
    var arrB = input[1].split(',');
    var intersection = [];

    for (var i = 0; i < arrA.length; i++) {
        if (arrB.indexOf(arrA[i]) != -1) {
            intersection.push(arrA[i]);
        }
    }

    return intersection.join(",");
}