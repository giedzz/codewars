function sumStrings(arg1, arg2) { 
    var sum = "";
	var r = 0;
	var a1, a2, i;
	// Pick the shortest string as first parameter and the longest as second parameter in my algorithm
	if (arg1.length < arg2.length) {
		a1 = arg1;
		a2 = arg2;
	}
	else {
		a1 = arg2;
		a2 = arg1;
	}
	a1 = a1.split("").reverse();
	a2 = a2.split("").reverse();
	// Sum a1 and a2 digits
	for (i = 0; i < a2.length; i++) {
		var t = ((i < a1.length) ? parseInt(a1[i]) : 0) + parseInt(a2[i]) + r;
		sum += t % 10;
		r = t < 10 ? 0 : Math.floor(t / 10);
	}
	// Append the last remain
	if (r > 0)
		sum += r;
	sum = sum.split("").reverse();
	// Trim the leading "0"
	while (sum[0] == "0")
		sum.shift();
	return sum.length > 0 ? sum.join("") : "0";
}
console.log(sumStrings('5','6'));


/*
Given the string representations of two integers, return the string representation of the sum of those integers.
For example:
sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
Tricky thing is that you have to be able to sum really large numbers.
*/