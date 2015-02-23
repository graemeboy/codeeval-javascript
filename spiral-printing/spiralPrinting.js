var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var lineData = line.split(';');
        var rows = lineData[0];
        var cols = lineData[1];
        var nums = lineData[2].split(' ');
        console.log(printSpiral(rows,cols,nums));
    }
});

function printSpiral(y,x,nums) {
    // Create matrix
    var i,
        output = '',
        line = [], 
        matrix = [];

    for (var i = 0; i < y; i++) {
        line = [];
        for (var j = 0; j < x; j++) {
            line.push(nums[j + (x * i)]);
        }
        matrix.push(line);
    }
    //console.log(matrix);

    // Print matrix in spiral
    var topBoundary = 0,
        rightBoundary = x,
        bottomBoundary = y,
        leftBoundary = 0,
        output = [],
        visited = [];

    function checkContinue() {
        return topBoundary < bottomBoundary && leftBoundary < rightBoundary;
    }

    while (checkContinue()) {
        // Print rightwards
        if (checkContinue()) {
            for (i = leftBoundary; i < rightBoundary; i++) {
                if (matrix[topBoundary][i]) {
                    output.push(matrix[topBoundary][i]);
                    matrix[topBoundary][i] = false;
                }
            }
            topBoundary += 1;
        }

        // Print downwards
        if (checkContinue()) {
            for (i = topBoundary; i < bottomBoundary; i++) {
                if (matrix[i][rightBoundary-1]) {
                    output.push(matrix[i][rightBoundary-1]);
                    matrix[i][rightBoundary-1] = false;
                }
            }
            rightBoundary -= 1;
        }
    
        // Print leftwards
        if (checkContinue()) {
            for (i = (rightBoundary-1); i >= leftBoundary; i--) {
                if (matrix[bottomBoundary-1][i]) {
                    output.push(matrix[bottomBoundary-1][i]);
                    matrix[bottomBoundary-1][i] = false;
                }
            }
            bottomBoundary -= 1;
        }

        if (checkContinue()) {
            // Print upwards
            for (i = (bottomBoundary-1); i >= topBoundary; i--) {
                if (matrix[i][leftBoundary]) {
                    output.push(matrix[i][leftBoundary]);
                    matrix[i][leftBoundary] = false;
                }
            }
            leftBoundary += 1;
        }
    }
    return output.join(" ");
}   