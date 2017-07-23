/* Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Global String Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
    Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Code by William T Sawyer
https://www.freecodecamp.org/brewcoffeesplash
*/



function reverseString(str) {
  // console.log("Original str: " + str);
  str = str.split(""); //split into an array;
  // console.log("After split str: " + str);

  str = str.reverse(); //reverse the array
  // console.log("After reverse str: " + str);
      
  str = str.join(""); // turn contents of array into single string, no separator
  return str;
  /*
  Alt:  Single-line of code
  return.str.split("").reverse().join("");
  */
}
reverseString("Greetings from Earth");
