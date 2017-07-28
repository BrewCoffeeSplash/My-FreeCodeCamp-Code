/*
Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.prototype.split()	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
	
Code by William T Sawyer
https://www.freecodecamp.org/brewcoffeesplash
*/

// Using regexp and .replace with a for loop
// for the regexp: \w\S*  could be used instead
function titleCase(str) {
  str = str.toLowerCase().split(" ");
  console.log("str length: " + str.length);
  for (var i = 0; i < str.length; i++){
    console.log("str at i: " + str[i]);

    str[i] = str[i].replace(/^\b\w/g, function(s){
      return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
    });
  }
  str = str.join(" ");
  return str;
}


titleCase("I'm a little tea pot");

/*
//  Using .map with no for loop
function titleCase(str) {
  str = str.toLowerCase().split(" ");
  console.log("str length: " + str.length);
  

  str = str.map(function(val){
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  }, 0);
  
  str = str.join(" ");
  return str;
}


titleCase("I'm a little tea pot");

*/