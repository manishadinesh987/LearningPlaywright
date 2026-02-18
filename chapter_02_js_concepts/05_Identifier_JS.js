// what is an iderntifier in js?
// An identifier in JavaScript is a name used to identify variables, functions, classes, or other entities in the code. 
// It is a sequence of characters that can include letters, digits, underscores (_), and dollar signs ($), but it must start with a letter, underscore, or dollar sign. 
// Identifiers are case-sensitive and cannot be the same as reserved keywords in JavaScript. 

//rules for valid identifiers in JavaScript:
// 1. An identifier must start with a letter (a-z or A-Z), an underscore (_), or a dollar sign ($).
// 2. After the first character, an identifier can include letters, digits (0-9), underscores, or dollar signs.
// 3. Identifiers are case-sensitive, meaning that "myVariable" and "myvariable" would be considered different identifiers.
// 4. Identifiers cannot be the same as reserved keywords in JavaScript (e.g., "var", "function", "if", etc.).

// Examples of valid identifiers:
let myVariable = 10;
let _privateVariable = "This is private";
let $dollarSignVariable = "This is a dollar sign variable";

// Examples of invalid identifiers:
// let 1stVariable = "This is invalid"; // Cannot start with a digit
// let my-variable = "This is invalid"; // Cannot contain hyphens
// let var = "This is invalid"; // Cannot be a reserved keyword