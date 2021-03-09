
exports.min = function min (array) {
 let f = [];
 if (array == undefined || array.length == 0) {
     return f = 0 ;
 }
 for (let i = 0; i < array.length; i++) {
    if (array[i] < f){
        f = array[i];
    }
 }
 return f;
}

exports.max = function max (array) {
    let f = [];
    if (array == undefined || array.length == 0) {
        return f = 0 ;
    }
 for (let i = 0; i < array.length; i++) {
    if (array[i] > f){
        f = array[i];
    }
 }
 return f;
}

exports.avg = function avg (array) {
    let f = 0;
    let z = 0;
    if (array == undefined || array.length == 0) {
        return f = 0 ;
    }
  for ( let i = 0; i < array.length; i++) {
      f += array[i];
  }
z = f/ array.length
return z;
  }
