var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(removeDups(line.split(',')).join(','));
    }
});

function removeDups(arr) {
    var seen = [];
    for (var i = 0; i < arr.length; i++) {
        if (seen.indexOf(arr[i]) === -1) {
            seen.push(arr[i]);
        }
    }
    return seen;
}