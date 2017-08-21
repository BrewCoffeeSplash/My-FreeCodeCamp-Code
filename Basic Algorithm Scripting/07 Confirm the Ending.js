/*
Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.prototype.substr() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

    String.prototype.substring() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

Code by William T Sawyer
https://www.freecodecamp.org/brewcoffeesplash
*/
// find solution for using .substring instead of .substr


function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var ending = false;
  // console.log("str: " + str);
  // console.log("target: " + target);
  // console.log("str.length: " + (str.length));
  // console.log("str ending: " + str.substr(str.length - target.length, str.length - 1));
  if (target === str.substr(str.length - target.length, str.length - 1)) {
    return true; 
  }
  return ending;
}

confirmEnding("He has to give me a new name", "name");

/*
// single line solution

function confirmEnding(str, target) {
	return (str.substr(str.length -target.length, str.length - 1) === target);
	// or using substr start location shortcut, where negative number is used, for starting at end instead
	// str.substr(-target.length) =  str.substr(str.length -target.length)
	// return (str.substr(-target.length) === target);
}

confirmEnding("He has to give me a new name", "name");


*/