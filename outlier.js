/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function findOutlier(integers){
  
  var even = 0;
  var odd = 0;
  var num;
  
  for(var i = 0; i < integers.length; i++){
    if(integers[i] % 2 === 0 || integers[i] % 2 === undefined){
      even++;
    } else {
      odd++;
    }  
  }
  
  for(var i = 0; i < integers.length; i++){
    if(even === 1 && odd > 1){
        if(integers[i] % 2 === 0){
          num = integers[i];          
        }
     }
      
    if(odd === 1 && even > 1){
        if(integers[i] % 2 !== 0){
          num = integers[i];         
        }
     }
  }  
  
  return num;
}