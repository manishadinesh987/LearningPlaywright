// var is function-scoped, while let and const are block-scoped. This means that variables declared with var are accessible throughout the entire function in which they are declared, while variables declared with let and const are only accessible within the block (e.g., within a loop or an if statement) in which they are declared.

// var variables can be re-declared and updated, while let variables can be updated but not re-declared within the same scope. const variables cannot be re-declared or updated; they must be initialized at the time of declaration and their value cannot be changed.

// Example:
var x = 10;
var x = 20; // Re-declaration is allowed
x = 30; // Update is allowed
console.log(x); // Output: 30

let y = 10;
// let y = 20; // Re-declaration is not allowed (will throw an error)
y = 30; // Update is allowed
console.log(y); // Output: 30

const z = 10;
// const z = 20; // Re-declaration is not allowed (will throw an error)
// z = 30; // Update is not allowed (will throw an error)
console.log(z); // Output: 10

var a = 10; // global scope
console.log(a);

// Defination of the function
function printHello(){
        console.log("Hello TheTestingAcademy!");
        var a = 20; // Local Scope
        console.log(a);
        if(true){
            var a = 30;
            console.log(a); // 30
        }
        console.log("F ->",a);
}


// Calling of the function 
printHello();

// let - Block Scoped
let b =20; // Global Scope
console.log(b); //output: 20

// Defination of the function
function printHello(){
        console.log("Hello TheTestingAcademy!");
        let b = 30; // Local Scope output: 30
        console.log(b);
        if(true){
            let b = 5;
            console.log(b); // 5 output: 5
        }
        console.log("let ->",b);   
}

// Calling of the function
printHello(); 
