var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var inArr = line.split(") (");
        numsOne = inArr[0].split(',');
        x1 = numsOne[0].substring(1,numsOne[0].length);
        y1 = numsOne[1].substring(1,numsOne[1].length);
        numsTwo = inArr[1].split(',');
        x2 = numsTwo[0];
        y2 = numsTwo[1].substring(1,numsTwo[1].length-1);
        var dist = Math.sqrt(Math.pow(Math.abs(x1-x2),2) + Math.pow(Math.abs(y1-y2),2));
        console.log(dist);
    }
});