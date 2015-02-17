var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(fib(1,0,1,parseInt(line)));
    }
});

function fib(n, n1, i, m) {
    if (m == 0) {
        return 0;
    } else if (i == m) {
        return n;
    }
    return fib(n+n1,n,i+1,m);
}