let value = "5";

switch (value) {
    case 5:
        console.log("Number 5 matched");
        break;
    case "5":
        console.log("String '5' matched");
        break;
}
// Output: "String '5' matched"
// switch uses ===, so "5" !== 5 (different types)

let status = 0;
switch (status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}

// Output: "0 matched" (0 === 0, NOT 0 === false)