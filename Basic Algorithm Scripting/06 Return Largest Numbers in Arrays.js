/*
Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Comparison Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
	
Code by William T Sawyer
https://www.freecodecamp.org/brewcoffeesplash
*/

/*
Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Comparison Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
	
Code by William T Sawyer
https://www.freecodecamp.org/brewcoffeesplash
*/

// procedural with for loops
function largestOfFour(arr) {
  var largestArray = [];
  var large = 0;
  for (var i = 0; i < arr.length; i++) {
    // console.log("arr[" +  i + "]");
    for ( var j = 0; j < arr[i].length; j++){
      // console.log("arr[" + i + "]" + ".length: " + arr[i].length);
      // console.log("arr[" +  i + "]" + "[" + j + "]");
      if (large < arr[i][j]) {
       large = arr[i][j]; 
      }
    }      
    largestArray.push(large);
    large = 0; // reset for next set of numbers in array.
  }
  return largestArray;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
