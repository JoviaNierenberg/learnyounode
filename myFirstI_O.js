var fs = require('fs');
var whatUserEntered = process.argv;
var contents = fs.readFileSync(whatUserEntered[2]);
var string = contents.toString();
var arr = string.split('\n');
var numLines = arr.length - 1;
console.log(numLines);
