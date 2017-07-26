/*
Check for Palindromes

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3  3a2", and "2_A3*3#A2".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.prototype.replace() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

    String.prototype.toLowerCase() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
	
Code by William T Sawyer
https://www.freecodecamp.org/brewcoffeesplash
*/

// First try.
function palindrome(str) {
  console.log("str: " + str);

  // ignore punctuation, case, spacing
  var rev, compare;
  str = str.toLowerCase();
  /* just use \W for whitespace and non-alphanumeric.  Also the _ is not covered by \W. Add g for match all. 
  */
  str = str.replace(/[\W_]/g,""); 
  
  compare = str;
  rev = str;
  //console.log("compare: " + compare);
  
  rev = rev.split("");
  compare = compare.split("");

  rev = rev.reverse();
  
  rev = rev.join("");
  compare = compare.join("");
  
  //	console.log("compare: " + compare);
  //	console.log("rev: " + rev);
  //	console.log("str: " + str);

  if (rev === compare){
	return true;
	}
  return false;
}

palindrome("0_0 (: /-\ :) 0-0");

/* 
// Comparing the 2 arrays instead of converting to string.
function palindrome(str) {
  // ignore punctuation, case, spacing
  var rev, compare;
  str = str.toLowerCase();
  // just use \W for whitespace and non-alphanumeric.  Also the _ is not covered by \W. Add g for match all. 
  
  str = str.replace(/[\W_]/g,""); 
  
  compare = str;
  rev = str;
  //	console.log("str: " + str);
  //	console.log("compare: " + compare);
  
  rev = rev.split("");
  compare = compare.split("");

  rev = rev.reverse();
  // i and length will meet in the middle of the array.
  for(var i = 0, length = compare.length; i < length - 2; i++) {
	  if(str[i] !== str[len-i]) {
      return false;
    }
  }
  return true;
  
*/

/*
// Using the .compare function. Also, using str directly, no need for other var.
// Matching every char of the string individually.  Return false as soon as possible.  No need to iterate through the entire string.
// quicker to check if current comparison is false ASAP than going thru entire string and returning true.
// Maybe have another that goes from the middle?  For very long strings....what if long string, but still a palindrome?
function palindrome(str) {
  // assign variables for beginning and end of string
  let beg = 0;
  let end = str.length - 1;

  // beg and end should meet in the middle
  while (end > beg) {
    // filter out non-alphanumeric characters
    // with .match go to next char in string until it ...matches
    while ( str[beg].match(/[\W_]/) ) {
      beg++;
      continue;
    }

    // filter out non-alphanumeric characters
    // with .match go to next char in string until it ...matches
    while ( str[end].match(/[\W_]/) ) {
      end--;
      continue;
    }
    
    console.log("str[" + beg + "].match: " + (str.charAt(beg)));
    console.log("str[" + end + "].match: " + (str.charAt(end)));

     
    // comparison on current char of string.
    if ( str[beg].toLowerCase() !== str[end].toLowerCase() ) return false;
    // move to next set of char points on string if they're NOT the same.
    beg++;
    end--;
  }
  
  // Palindrome if it iterates through the entire string without a return false.
  return true;

}

palindrome("not a palindromn");


*/ 
