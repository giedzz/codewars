/*
This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
function accum(s) {
    // your code
    var sSplit = s.split('');
    var finalArray = [];
    for(var i=0; i < sSplit.length; i++){
        sFinal = sSplit[i].repeat(i+1).toLowerCase();
        sFinal = sFinal.charAt(0).toUpperCase() + sFinal.slice(1);
        finalArray.push(sFinal);
    }
    return finalArray.join('-');
}

console.log(accum('MjtkuBovqrU'))