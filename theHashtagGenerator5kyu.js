/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!
Here's the deal:
It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag (str) {
    if(!(str.replace(/\s{2,}/g,'').length)){return false;}
    str = str.replace(/\s{2,}/g,' ');
    let finalStr = '#';
    var strArr = str.split(' ');
    for(var i = 0; i < strArr.length; i++){
        string = strArr[i];
        finalStr += string.charAt(0).toUpperCase() + string.slice(1);
    }
    if(str.length >= 140){
        return false;
    }
    return finalStr;
}
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));