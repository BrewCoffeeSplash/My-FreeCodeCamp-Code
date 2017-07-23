/*
Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
	
Code by William T Sawyer
https://www.freecodecamp.org/brewcoffeesplash
*/

function factorialize(num) {
  // Using arrays with .push and .reduce
  var fact = [];
  // check for 0
  if(num === 0){
    return 1;
  }
  for (var i = 0; i < num; i++) {
    fact.push(i+1);
    console.log("Fact: " + fact);
  }  
  
  var numFact = fact.reduce(function(previousVal, currentVal) {
    // console.log("previousVal: " + previousVal);
    return previousVal * currentVal;
  });
  
  
  return numFact;
}  
/*
  recursive solution:  No arrays
  // check for 0
  if(num === 0){
    return 1;
  }
  // function will loop on itself until it hits 0, then returns 1 instead of looping again
  return num * factorialize(num - 1);
}
*/
factorialize(20);




