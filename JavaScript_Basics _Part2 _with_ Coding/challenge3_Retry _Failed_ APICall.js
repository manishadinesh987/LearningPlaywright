//In automation testing, API calls sometimes fail due to network issues. 
// Write a JavaScript program that simulates retrying a failed API call using a do...while loop. 
// The program should retry a maximum of 5 times. 
// Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). 
// Log each attempt and print the final result.
//Attempt 1: ❌ FAILED (Timeout/Error) 
// Attempt 2: ✅ SUCCESS (Response 200 OK) 
// API call PASSED after 2 attempt(s).

const maxAttempt = 5;
let attempt = 0;
let isSuccess = false;

do {
    attempt++;

    let randomValue = Math.random(); 

    if (randomValue > 0.6) {
        console.log(`Attempt ${attempt}: ✅ SUCCESS (Response 200 OK)`);
        isSuccess = true;
        break;
    } else {
        console.log(`Attempt ${attempt}: ❌ FAILED (Timeout/Error)`);
    }

} while (attempt < maxAttempt);

if (isSuccess) {
    console.log(`API call PASSED after ${attempt} attempt(s).`);
} else {
    console.log(`API call FAILED after ${attempt} attempt(s).`);
}