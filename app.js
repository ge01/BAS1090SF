var x = [14, 3, 77, 44];
/*
console.log(x.slice(0, 1)); //[14]
console.log(x.slice(1, 2)); //[3]
console.log(x.slice(1)); //[3, 77, 44]
console.log(x.slice(2)); //[77, 44]
*/
/*
var y = x.slice(0,1);
// Slice does not change the array which invokes it
console.log(x); //[14, 3, 77, 44]
console.log(y); //[14]
*/

// Alghough splice also takes two arguments (at minimum), the meaning is very different:
// On top of that, splice mutates the array that calls it
var z = x;
var a = x;
var b;
/*
console.log(z); //[14, 3, 77, 44]
console.log(x.slice(1,2)); //[3]
console.log(z.splice(1,2)); //[3, 77]
console.log(z); //[14, 44]
*/

console.log(a); //[14, 3, 77, 44]
console.log(x.slice(1,2)); //[3]
b = a.splice(1,2);
console.log(a); //[14, 44]
console.log(b); //[3, 77]
