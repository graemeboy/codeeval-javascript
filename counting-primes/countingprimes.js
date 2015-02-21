var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var lineArr = line.split(',');
        var min = parseInt(lineArr[0]);
        var max = parseInt(lineArr[1]);
        console.log(findNumOfPrimes(min,max));
    }
});

function findNumOfPrimes(min, max) {
    var numPrimes = 0;
    for (var i = min; i <= max; i++) {
        if (isPrime(i)) {
            numPrimes++;
        }
    }
    return numPrimes;
}

function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}