function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

console.log(slasher([1, 2, 3], 0));
//console.log(slasher(["burgers", "fries", "shake"], 1));
//console.log(slasher([1, 2, 3], 2));
//console.log(slasher([1, 2, 3], 4));
//console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));
//console.log(slasher([1, 2, 3], 9));



/*
var a = [1, 2, 3];
console.log(a.splice(0,2)); //[1, 2]
console.log(a); //[3] <------

var b = [4, 5, 6];
console.log(b.slice(1)); //[5, 6]
console.log(b); //[4, 5, 6]
var c = b.slice(1);
console.log(c); //[5, 6]

var d = [1, 2, 3];
console.log(d.slice(0)); //[1, 2, 3]<------

var e = [1, 2, 3];
console.log(e.slice(9)); //[]
console.log(e.splice(9)); //[]
*/
