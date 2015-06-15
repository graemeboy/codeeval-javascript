var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {

        if (isHappy(line, 0)) {
            console.log(1);
        } else {
            console.log(0);
        }

    }
});

function isHappy(lineIn, count) {
    
    if (count > 200) {
        return false;
    }

    var newSum = sumOfSquares(lineIn.split(''));

    if (newSum == '1') { 
        return true;
    } else {
        return isHappy('' + newSum, count + 1);
    }
}

function sumOfSquares(arrIn) {
    var sum = 0;
    for (var i = 0; i < arrIn.length; i++) {
        sum += arrIn[i] * arrIn[i];
    }
    return sum;
}