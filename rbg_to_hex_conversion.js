/*
The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function rgb(r, g, b){
  var dec = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  var str = [];
  if(r > 0){
    if(r > 255){
      r = 255;
      r = r/16
      var rBefore = r.toString().split(".")[0];
      var rAfter = "." + r.toString().split(".")[1];
    } else {
        r = r/16;
        rBefore = r.toString().split(".")[0];
        if(r === 0){
          rAfter = 0;
        } else {
          rAfter = "." + r.toString().split(".")[1];
        }
    }
  } else {
    rBefore = 0;
    rAfter = 0;
  }
  if(g > 0){
    if(g > 255){
      g = 255;
      var gBefore = g.toString().split(".")[0];
      var gAfter = "." + g.toString().split(".")[1];
    } else {
      g = g/16;
      gBefore = g.toString().split(".")[0];
      if(g === 0){
        gAfter = 0;
      } else {
        gAfter = "." + g.toString().split(".")[1];
      }
    }
  } else {
    gBefore = 0;
    gAfter = 0;
  }
  if(b > 0){
    if( b > 255){
      b = 255;
      var bBefore = b.toString().split(".")[0];
      var bAfter = "." + b.toString().split(".")[1];
    } else {
      b = b/16;
      bBefore = b.toString().split(".")[0];
      if(b === 0){
        bAfter = 0;
      } else {
        bAfter = "." + b.toString().split(".")[1];
      }
    }
  } else {
    bBefore = 0;
    bAfter = 0;
  }
  str.push(dec[rBefore], dec[rAfter*16], dec[gBefore], dec[gAfter*16], dec[bBefore], dec[bAfter*16]);
  str = str.join("");
  return str;
}