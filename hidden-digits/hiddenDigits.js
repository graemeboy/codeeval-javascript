var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var output = '';    
        for (var i = 0; i < line.length; i++) {
            if (!isNaN(line[i])) {
                output += line[i];
            } else {
                var charCode = line.charCodeAt(i) - 97;
                if (charCode >= 0 && charCode < 10) {
                    output += charCode;
                }
            }
        }
        if (output.length > 0) {
            console.log(output);
        } else {
            console.log('NONE');
        }
    }
});