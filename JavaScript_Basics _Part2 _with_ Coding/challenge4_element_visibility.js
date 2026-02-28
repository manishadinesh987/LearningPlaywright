// Write a JavaScript program that checks an element's properties 
// (isPresent, isDisplayed, isEnabled) and  prints the appropriate action a QA engineer should take.
//  Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.
// States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
// Severity: CRITICAL (not present), 
// WARNING (not displayed or not enabled), OK (all good).

let isPresent = false, isDisplayed = true, isEnabled = true , state, severity;

if(isPresent=== true &&isDisplayed === true && isEnabled === true ){
     state = "READY";
     action = "Safe to interact with the element.";
}else if (isPresent === true && isDisplayed === true && isEnabled === false){
     state = "DISABLED"
     action = "Element is visible but disabled. Wait for enable state or check preconditions."

}else if(isPresent === true && isDisplayed === false){
     state = "HIDDEN"
     action = "Element exists but is hidden. Wait for visibility.";
}else{
    state = "NOT FOUND"
    action = "Element not present in DOM. Check locator or page load.";
}

severity = (isPresent=== false) ? "CRITICAL":
            (isDisplayed === false || isEnabled === false)? "WARNING" : "OK"

console.log(`Status: ${state}`);
console.log(`Severity: ${severity}`);
console.log(`Action: ${action}`);