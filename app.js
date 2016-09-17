/********************************************************************************
*                               Slasher Flick                                   *
* Return the remaining elements of an array after chopping off n elements from  *
* the head.                                                                     *
********************************************************************************/
function slasher(arr, howMany) {
  // The splice() method changes the content of an array by removing existing
  // elements and/or adding new elements
  arr.splice(0, howMany);
  return arr;
}

// Input Test Data
console.log(slasher([1, 2, 3], 0));
console.log(slasher(["burgers", "fries", "shake"], 1));
console.log(slasher([1, 2, 3], 2));
console.log(slasher([1, 2, 3], 4));
console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));
console.log(slasher([1, 2, 3], 9));

// Ooutput Data
//[1, 2, 3]
//["fries", "shake"]
//[3]
//[]
//["cheese", 4]
//[]
