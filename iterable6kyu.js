/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/
var uniqueInOrder = function (iterable) {
    var masyvas = [];
    for(var i=0; i < iterable.length; i++){
        if(i == 0){
            masyvas.push(iterable[i]);
        }else{
            if(masyvas[masyvas.length - 1] != iterable[i]){
                masyvas.push(iterable[i]);
            }
        }
    }
    return masyvas;
}
console.log(uniqueInOrder([1,2,2,3,3]));