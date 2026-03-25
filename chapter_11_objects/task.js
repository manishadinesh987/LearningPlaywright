// ============================================
// JavaScript Objects — Complete Guide
// ============================================


// -----------------------------------------------
// 1. What is an Object in JavaScript?
// -----------------------------------------------

// An object is a collection of key-value pairs
let user = {
  name: "Alice",   // key: "name",  value: "Alice"
  age: 25,         // key: "age",   value: 25
  isAdmin: false   // key: "isAdmin", value: false
};


// -----------------------------------------------
// 2. How to Access Object Properties
// -----------------------------------------------

console.log(user.name);    // "Alice"  → dot notation
console.log(user["age"]);  // 25       → bracket notation


// -----------------------------------------------
// 3. Dot Notation vs Bracket Notation
// -----------------------------------------------

let product = { "product name": "Laptop", category: "electronics" };

console.log(product["product name"]); // "Laptop" → bracket needed for keys with spaces

let key = "category";
console.log(product[key]);   // "electronics" → bracket needed for dynamic/variable keys
console.log(product.key);    // undefined     → looks for literal key called "key"


// -----------------------------------------------
// 4. How to Add and Delete Properties
// -----------------------------------------------

let person = { name: "Alice" };

// Adding properties
person.age     = 25;         // dot notation
person["city"] = "Chennai";  // bracket notation
console.log(person);         // { name: "Alice", age: 25, city: "Chennai" }

// Deleting properties
delete person.city;
console.log(person);         // { name: "Alice", age: 25 }


// -----------------------------------------------
// 5. How to Check if a Property Exists
// -----------------------------------------------

let student = { name: "Alice", score: 0 };

// ✅ 'in' operator — recommended
console.log("name"  in student); // true
console.log("email" in student); // false

// ⚠️ Avoid checking with !== undefined — gives wrong result when value is 0 or false
console.log(student.score !== undefined); // false ← WRONG, property exists but value is 0
console.log("score" in student);          // true  ← CORRECT


// -----------------------------------------------
// 6. Object.keys() — returns array of all keys
// -----------------------------------------------

let car = { brand: "Toyota", model: "Camry", year: 2022 };

console.log(Object.keys(car));        // ["brand", "model", "year"]
console.log(Object.keys(car).length); // 3 ← useful to count properties


// -----------------------------------------------
// 7. Object.values() — returns array of all values
// -----------------------------------------------

console.log(Object.values(car)); // ["Toyota", "Camry", 2022]


// -----------------------------------------------
// 8. Object.entries() — returns array of [key, value] pairs
// -----------------------------------------------

console.log(Object.entries(car));
// [["brand", "Toyota"], ["model", "Camry"], ["year", 2022]]


// -----------------------------------------------
// 9. How to Loop Through an Object
// -----------------------------------------------

// Option 1: for...in loop
for (let key in car) {
  console.log(key, ":", car[key]);
  // brand : Toyota
  // model : Camry
  // year  : 2022
}

// Option 2: Object.entries() + forEach (cleaner)
Object.entries(car).forEach(([key, value]) => {
  console.log(key, ":", value);
  // brand : Toyota
  // model : Camry
  // year  : 2022
});

// Option 3: Object.keys() + map (useful when transforming)
Object.keys(car).forEach(key => {
  console.log(key, "→", car[key]);
});