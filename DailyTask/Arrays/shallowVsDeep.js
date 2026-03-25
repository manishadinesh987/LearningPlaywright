

// let suite1 = [{ name: "login", status: "pass" }];
// let suite2 = [...suite1];
// suite2[0].status = "fail";
// console.log(suite1[0].status);

//Spread [...] creates a new array, but it only copies the references to the objects inside — not the objects themselves. So both suite1 and suite2 still point to the exact same object in memory. Changing it from one array changes it for both.

//The fix — deep copy each object:

function add2(elem) {
        return elem * 2;
    }

 function elemret(test) {
        return test;
    }   
let suit = [1,2,3,4]

let modSuit = suit.map(add2)

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = suite1.map(elemret);
let suite3 = suite2
console.log(suite3[0].status); // "fail" ✓

suite2[0].status = "fail";
console.log(suite1[0].status); // "pass" ✓
console.log(suite2[0].status); // "fail" ✓
console.log(suite3[0].status); // "fail" ✓

console.log(suit)

console.log(modSuit)
