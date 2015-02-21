var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var items = JSON.parse(line).menu.items,
            sum = 0;
        for ( var i = 0; i < items.length; i++) {
            if (items[i] && typeof items[i].label != 'undefined') {
                sum += parseInt(items[i].id);
            }
        }
        console.log(sum);
    }
});