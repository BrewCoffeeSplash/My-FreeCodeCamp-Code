/*
Repeat a string repeat a string

Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Global String Object	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
	
Code by William T Sawyer
https://www.freecodecamp.org/brewcoffeesplash
*/


function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeat = "";
   for (var i = 0; i < num ; i++) {
    repeat += str;
  }
  
  return repeat;
}

repeatStringNumTimes("abc", 3);

/*
function repeatStringNumTimes(str, num) {
  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}
//a while loop instead, with-without recursion, or a declarative approach with a ternary operator of if
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);
*/
