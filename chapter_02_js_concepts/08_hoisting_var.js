console.log(greeting); // Output: undefined
var greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!

// Explanation:
// In JavaScript, variable declarations using 'var' are hoisted to the top of their scope. 
// This means that the declaration of the variable 'greeting' is moved to the top of the code, 
// but its assignment remains in place. Therefore, when we try to access 'greeting' before its assignment, 
// it exists but has a value of 'undefined'. After the assignment, it holds the string "Hello, World!".
