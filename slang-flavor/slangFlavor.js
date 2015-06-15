var fs  = require("fs");
var inserts = [
    ', yeah!',
    ', this is crazy, I tell ya.',
    ', can U believe this?',
    ', eh?',
    ', aw yea.',
    ', yo.',
    '? No way!',
    '. Awesome!'
];
var insert;
var lines;
var line;
var lineLen;
var count = 0;
var outs;
var insertNum;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        outs = [];
        lines = line.match(/[^$\s][^\.!\?\n]+[\.!\?]+/g);
        for (var i = 0; i < lines.length; i++) {
            insertNum = Math.floor(count/2);
            if (count % 2 !== 0) {
                line = lines[i].trim();
                lineLen = line.length;
                insert = inserts[insertNum];
                outs.push(line.substr(0,lineLen-1) + insert);
            } else {
                outs.push(lines[i]);
            }
            count += 1;
            if (insertNum == inserts.length) {
                count = 1;
            }
        }
        console.log(outs.join(' '));
    }
});