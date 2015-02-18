var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(isArmstrong(line));
    }
});

function isArmstrong(num) {
    var sum = 0;
    var numDigits = num.length;
    for (var i = 0; i < numDigits; i++) {
        sum += Math.pow(parseInt(num[i]), numDigits);
    }
    if (sum == num) {
        return "True";
    } else {
        return "False";
    }
}