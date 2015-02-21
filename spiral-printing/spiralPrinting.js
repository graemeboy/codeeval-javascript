var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        // console.log(line);
        var lineData = line.split(';');
        var x = lineData[0];
        var y = lineData[1];

        var nums = lineData[2].split(' ');
        printSpiral(x,y,nums);
    }
});

function printSpiral(x,y,nums) {
    var i, output ='';
    // Make a real matrix out of it
    //console.log("matrix",x,"x",y);
    var line = [], matrix = [];
    for (var i = 0; i < y; i++) {
        line = [];
        for (var j = 0; j < x; j++) {
            line.push(nums[j + (x * i)]);
        }
        matrix.push(line);
    }
    console.log(matrix);

    var topBoundary = 0,
        rightBoundary = x,
        bottomBoundary = y,
        leftBoundary = 0;

    while (topBoundary < bottomBoundary && leftBoundary < rightBoundary) {
        // Print rightwards
        for (i = leftBoundary; i < rightBoundary; i++) {
            output += matrix[topBoundary][i] + ' ';
        }
        topBoundary += 1;
        if (topBoundary < bottomBoundary) {
            // Print downwards
            for (i = topBoundary; i < bottomBoundary; i++) {
                output += matrix[i][rightBoundary-1] + ' ';
            }
            rightBoundary -= 1;
        
            if (leftBoundary < rightBoundary) {
                // Print leftwards
                for (i = (rightBoundary-1); i >= leftBoundary; i--) {
                   output += matrix[bottomBoundary-1][i] + ' ';
                }
                bottomBoundary -= 1;

                if (topBoundary < bottomBoundary) {
                    // Print upwards
                    for (i = (bottomBoundary-1); i >= topBoundary; i--) {
                        output += matrix[i][leftBoundary] + ' ';
                    }

                    leftBoundary += 1;
                }
            }
        }
    }
    console.log(output);
}   