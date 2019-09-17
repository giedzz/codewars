/*
Given a number n, return the number of positive odd numbers below n, EASY!
oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
*/
function oddCount(n){
    //Too slow
    // var oddNumberCount = 0;
    //   for(var i=0; i<n; i++){
    //       if(i % 2 != 0){
    //           oddNumberCount++;
    //       }
    //   }
    var dividableNumber;
    if(n % 2 != 0){
        dividableNumber = n-1;
    }else{
        dividableNumber = n;
    }
    return dividableNumber/2;
  }

  console.log(oddCount(15));