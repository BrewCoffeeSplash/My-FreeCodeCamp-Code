/*
Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.prototype.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

    String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
	
Code by William T Sawyer
https://www.freecodecamp.org/brewcoffeesplash
*/

// first attempt.
// use .sort for longest to shortest, return longest word at array[0]
function findLongestWord(str) {
  var word;
  console.log("str before split: " + str);

  var array = str.split(" ");
  console.log("str after split: " + str);
  console.log("array: " + array);
  
  function descending(a, b) {
    return b.length - a.length;
  }
  
  array.sort(descending);
  console.log("array after .sort: " + array);

  // for (var i = 0; i < str.length; i++) {
  //   if (array[i].length > array[i + 1].length)
  // }
  return array[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

/*
// use .split and a for-if statement
function findLongestWord(str) {
	str = str.split(" ");
	var maxL = 0;
  // console.log("str: " + str);

	for (var i = 0; i < str.length; i++) {
		if (str[i].length > maxL) {
		maxL = str[i].length;
		// console.log("maxL: " + maxL);
		}
	}
	return maxL;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

*/
