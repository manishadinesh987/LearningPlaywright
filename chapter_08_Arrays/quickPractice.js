//T-001: Create an array of 5 elements using the Array Constructor.

let elements = new Array(1,2,3,4,5);
console.log(elements);

// T-002: Create an array of 3 empty slots.
let empty = new Array(3);
console.log(empty);

//T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.

const arr = [1,2,3,4,5,6]
console.log(arr[arr.length-3]);

//T-004: Use the for loop on the above array to print elements in the odd index.

for(let i=0; i<arr.length;i++){
    if(i % 2 !==0){
        console.log(arr[i]);
    }
}

//T-005: Add one element at the front and the end of an array.
arr.push(7);
arr.unshift(0);
console.log(arr);

//T-006: Remove an element from the front and the end of an array.
arr.pop();
arr.shift();
console.log(arr);

//T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
const fav = ["cake","biriyani","banana","pav","sev","chicken","fish","nuts","chocolate","smoothie"];
const [,,,,,sixth]= fav;
console.log(sixth);

// T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

let url = "https://staging.myapp.com/dashboard";
