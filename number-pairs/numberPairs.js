var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {

        var inputArr = line.split(';');
        var target = inputArr[1];
        var nums = inputArr[0].split(',');
        console.log(findMatch(nums, target));

    }
});

function findMatch (nums, target) {

    var toroise;
    var hare;
    var solutions = []

    for (var i = 0; i < nums.length; i++) {

        tortoise = parseInt(nums[i]);

        for (var j = i + 1; j < nums.length; j++) {

            hare = parseInt(nums[j]);
            sum = tortoise + hare;

            if (sum == target) {
                solutions.push([tortoise,hare])
            }

        }

    }

    if (solutions.length > 0) {
        return solutions.join(';')
    } else {
        return 'NULL'
    }
}