// Bug Severity Classifier
// As a QA engineer, classify bugs based on two factors: 
// frequency ("always", "often", "rarely") and 
// impact ("blocker", "major", "minor").
//  Write a JavaScript program using nested if-else that prints the bug severity level.

// Classification Matrix:
// - always + blocker → P0 | always + major → P1 | always + minor → P2
// - often + blocker → P1 | often + major → P2 | often + minor → P3
// - rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

let frequency = "always", impact = "blocker", severity;

if(frequency === "always"){
    if(impact === "blocker"){
        severity = "P0";
    }else if( impact === "major"){
        severity = "P1";
    }else{
        severity = "P2";
    }
}else if(frequency === "often"){
    if(impact === "blocker"){
        severity = "P1";
    }else if( impact === "major"){
        severity = "P2";
    }else{
        severity = "P3";
    }
}else if(frequency === "rarely"){
    if(impact === "blocker"){
        severity = "P2";
    }else if( impact === "major"){
        severity = "P3";
    }else{
        severity = "P4";
    }
}

//Bug Title: Checkout page crashes on applying coupon 
// Frequency: always 
// Impact: blocker 
// Severity: P0 - Critical: Stop release immediately

console.log("Bug Title: Checkout page crashes on applying coupon ");
console.log("Frequency: ",frequency);
console.log("Impact: ",impact);
if (severity === "P0") {
console.log("Severity:"+severity+"- Critical: Stop release immediately");
}else{
    console.log("Severity: ",severity);
}
