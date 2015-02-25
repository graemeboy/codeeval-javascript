var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(findLargestContinuous(line.split(",")));
    }
});

function findLargestContinuous(nums) {
    var maxSoFar = parseInt(nums[0]),
        maxEndingHere = parseInt(nums[0]),
        curNum;

    for (var i = 1; i < nums.length;i++) {
        curNum = parseInt(nums[i]);
        maxEndingHere = Math.max(curNum, maxEndingHere + curNum) ;
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}