var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        lineArr = line.split(',');
        console.log(mod(lineArr[0], lineArr[1]));
    }
});

function mod(n,m) {
    var quotient = Math.floor(n / m);
    var remaining = n - (m * quotient);
    return remaining;
}