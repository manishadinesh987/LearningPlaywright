// // Test Case Result Counter
// After a test suite runs, 
// you receive an array of test results (strings: "pass", "fail", "skip"). 
// Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. 
// Print a test report with total tests, counts, pass rate percentage, 
// and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).
// otal Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% 
// VERDICT: Minor failures. Review before release.

let testResults = ["pass","pass","fail","pass","fail","fail","fail","skip"];
let passCount = 0, failCount = 0, skipCount = 0;

for(let i = 0; i<testResults.length; i++){
    if(testResults[i]=== "pass"){
        passCount++
    }else if(testResults[i] === "fail"){
        failCount++
    }else if(testResults[i] === "skip"){
        skipCount++
    }
}

let totalTests = testResults.length;
let passRate = (passCount/totalTests) * 100;

console.log(`Total Tests : ${totalTests}`);
console.log(`Passed : ${passCount}`);
console.log(`Failed : ${failCount}`);
console.log(`Skipped : ${skipCount}`);
console.log(`Pass Rate: ${passRate.toFixed(2)}`)

if(passCount === totalTests){
    console.log("VERDICT: All passed. Ready for release");
}else if(failCount <= 2){
    console.log("VERDICT: Minor failures. Review before release.");
}else{
    console.log("VERDICT: Failures. Block release");
}
