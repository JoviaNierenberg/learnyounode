var arr = process.argv;
var total = 0;
for (var i = 2; i < arr.length; i++) {
	arr[i] = +arr[i];
	total += arr[i]
}
console.log(total);
