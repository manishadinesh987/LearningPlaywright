// Exercise 1 : API Response Validation
// You receive an array of API response codes. Write code to:
// Check if ALL responses are successful (200–299)

// Return all unique error codes
// let responses = [200, 201, 404, 500, 404, 200, 503];


// Check if ALL responses are successful (200–299)
let responses = [200, 201, 404, 500, 404, 200, 503];
let isSuccess = responses.every(res => res >=200 && res <= 299);
console.log(isSuccess);

// Find the FIRST non-success code
let nonSuccess = responses.find(code => code  < 200 || code>299);
console.log(nonSuccess);

// Return all unique error codes
const errors = responses.filter(code => code < 200 || code > 299);
const uniqueErrors = [...new Set(errors)];
console.log("Unique error codes:", uniqueErrors);
