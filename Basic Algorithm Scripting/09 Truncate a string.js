/*
Truncate a string

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.prototype.slice()	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
	
Code by William T Sawyer
https://www.freecodecamp.org/brewcoffeesplash
*/



function truncateString(str, num) {
  // Clear out that junk in your trunk
  trunc = "...";
  while (num > 3) {
    if (num >= str.length) {
      return str;
    }
    if (str.length > num) {
      return str.slice(0, num - trunc.length) + trunc;
    }
  }
  
  return str.slice(0, num) + trunc;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
