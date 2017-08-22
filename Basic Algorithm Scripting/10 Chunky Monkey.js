/*
Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Array.prototype.push()	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

    Array.prototype.slice()	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
	
	
Code by William T Sawyer
https://www.freecodecamp.org/brewcoffeesplash
*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  chunky = [];
  
  for (var i = 0; i < arr.length; i += size) {
    chunky.push(arr.slice(i, i + size));
    console.log("i = " + i + " " + chunky);
  }
  
  return chunky;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/*
Can also do a while loop instead.


?)