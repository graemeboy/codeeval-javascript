var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var lists = line.split('|');
        var listA = lists[0].trim().split(' ');
        var listB = lists[1].trim().split(' ');
        var out = '';
        for (var i = 0; i < listA.length; i++) {
            out += (listA[i] * listB[i]) + ' ';
        }
        console.log(out);
    }
});