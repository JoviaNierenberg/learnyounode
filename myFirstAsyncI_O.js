var fs = require('fs');
var whatUserEntered = process.argv;
var callback = function(err, contents) {
	var string = contents.toString();
	var arr = string.split('\n');
	var numLines = arr.length - 1;
	console.log(numLines);
};
fs.readFile(whatUserEntered[2], callback);
