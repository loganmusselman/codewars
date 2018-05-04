/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```
*/

function longest(s1, s2) {
  var result = [];
  var str = s1.concat(s2).split("").sort();
  
  str.reduce(function(prev, curr){
    if(curr !== prev){
      result.push(curr);
      return curr;
    } else {
      return prev;
    }
  }, 0)
  
  return result.join("");
  
}