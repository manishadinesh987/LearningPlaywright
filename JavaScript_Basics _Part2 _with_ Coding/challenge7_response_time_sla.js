//As a performance tester, you collect API response times in milliseconds.
// Write a JavaScript program using a while loop that
// analyzes an array of response times and prints a performance report 
// with min, max, average, and how many responses breached the SLA threshold (> 500ms). 
// Use comparison operators for min/max tracking.
//Total Requests: 6 Min Response: 120ms Max Response: 620ms 
// SLA Breaches: 2 (33.33%) Overall Status: ❌ SLA VIOLATED

let responseTimes = [120, 230, 450, 310, 180, 320]; 
const SLA_LIMIT = 500;
let breach = 0;
let i = 0
let min = max = responseTimes[0];

while(i<responseTimes.length)
{
    
    if(responseTimes[i]<min){
        min = responseTimes[i];
    }
    if(responseTimes[i]>max){
        max = responseTimes[i];
    }
    if(responseTimes[i]>SLA_LIMIT){
        breach++
    }
    i++
}

const breachPercent = (breach/responseTimes.length*100).toFixed(2);
const status = breach>0 ? "❌ SLA VIOLATED" : "✅ SLA PASSED"
console.log(`Total Requests: ${responseTimes.length}`);
console.log(`Min Response: ${min}`);
console.log(`Max Response: ${max}`);
console.log(`SLA Breaches: ${breach} (${breachPercent})`);
console.log(`Overall Status: ${status}`);


