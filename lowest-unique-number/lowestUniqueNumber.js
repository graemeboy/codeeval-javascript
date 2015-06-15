var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var nums = line.split(" ");
        var uniqNums = [];
        var numsHash = {};
        var lowestNum = 0;
        for (var i = 0; i < nums.length; i++) {
            if (typeof numsHash[nums[i]] == 'undefined') {
                numsHash[nums[i]] = true;
                uniqNums.push(nums[i])
            } else if (uniqNums.indexOf(nums[i]) !== -1) {
                uniqNums.splice(uniqNums.indexOf(nums[i]), 1);
            }
        }
        for (var j = 0; j < uniqNums.length; j++) {
            if (uniqNums[j] < uniqNums[lowestNum]) {
                lowestNum = j;
            }
        }
        console.log(nums.indexOf(uniqNums[lowestNum]) + 1);
    }
});