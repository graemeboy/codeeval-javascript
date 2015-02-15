var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        //do something here
        var inArr = line.split(';');
		var n = inArr[0];
		var arr = inArr[1].split(',');
		console.log(findDup(n,arr));
    }
});

function findDup(n, arr) {
  var testableArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (testableArr[arr[i]] == 1) {
      return arr[i];
    } else {
      testableArr[arr[i]] = 1;
    }
  }
  return "did not find";
}