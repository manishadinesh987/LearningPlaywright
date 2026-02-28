// ✅ Triangle Classifier:


// Write a program that classifies a triangle based on its side lengths. 
// Given three input values representing the lengths of the sides, 
// determine if the triangle is equilateral (all sides are equal), 
// isosceles (exactly two sides are equal), 
// or scalene (no sides are equal). Use an if-else statement to classify the triangle.

let a=10, b=10, c=10;

if(a===b && b===c){
    console.log("The triange is Equilateral");
}else if(a===b || b===c || a===c ){
    console.log("The triangle is Isosceles");
}else{
    console.log("The triangle is Scalene");
}