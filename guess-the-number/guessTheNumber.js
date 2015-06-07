var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {

        var inArr = line.split(' ');
        var responses = inArr.slice(1, inArr.length);

        var max = parseInt(inArr[0], 10);
        var middle = Math.ceil(max/2);
        var min = 0;

        for (var i = 0; i < responses.length; i++) {
            response = responses[i];

            if (response === 'Lower') {
                max = middle - 1;
            } else if (response === 'Higher') {
                min = middle + 1;
            } else if (response === 'Yay!') {
                console.log(Math.round(middle));
            }

            middle = getMiddle(min,max);
        }

    }
});

/**
 * Returns the middle of min and max.
 */
function getMiddle(min, max) {
    return Math.ceil(min + (max-min)/2);
}