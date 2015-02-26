var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var content = line.split(","),
            words = [], digits = [], output = '';
        for (var i = 0; i < content.length; i++) {
            if (isNaN(content[i])) {
                words.push(content[i]);
            } else {
                digits.push(content[i]);
            }
        }
        if (words.length > 0) {
            output = words.join(",");
            if (digits.length > 0) {
                output += "|";
            }
        }
        console.log(output + digits.join(","));
    }
});