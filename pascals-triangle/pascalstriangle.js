var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        printOutput(makeTriangle(parseInt(line)));
    }
});

function makeTriangle(num) {
    var triangle = [], line, val = 1;
    for (var i = 0; i <= num; i++) {
        line = [];
        for (var j = 0; j < i; j++) {
            var upLeft, upRight;
            if (j == 0 || j == i) {
                line.push(1);
            } else {
                if (typeof triangle[i-1] != 'undefined' &&
                    typeof triangle[i-1][j-1] != 'undefined') {
                    upLeft = triangle[i-1][j-1];
                } else {
                    upLeft = 0;
                }
                if (typeof triangle[i-1] != 'undefined' &&
                    typeof triangle[i-1][j] != 'undefined') {
                    upRight = triangle[i-1][j];
                } else {
                    upRight = 0;
                }
                line.push(upLeft + upRight);
            }
        }
        triangle.push(line);
    }
    return triangle;
}

function printOutput(triangle) {
    var output = '';
    for (var i = 0; i < triangle.length; i++) {
        for (var j = 0; j < triangle[i].length; j++) {
            output += triangle[i][j] + " ";
        }
    }
    console.log(output);
}

// function printTriangle(arr) {
//     var line;
//     for (var i = 0; i < arr.length; i++) {
//         line = '';
//         for (var j = arr.length; j > i; j--) {
//             line += "\t";
//         }
//         for (var j = 0; j < arr[i].length; j++) {
//             line += arr[i][j] + "\t\t";
//         }
//         console.log(line);
//     }
// }