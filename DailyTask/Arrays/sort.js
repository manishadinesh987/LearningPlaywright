
// let responseTimes = [320, 85, 1200, 450, 99];
// let sorted = responseTimes.sort();
// console.log("Fastest:", sorted[0]);

//.sort() sorts alphabetically (as text), not numerically. So 1200 comes before 85 because "1" comes before "8" in text order

let responseTimes = [320, 85, 1200, 450, 99];
let sorted =  responseTimes.sort((a,b) => a-b);
console.log("Fastest:", sorted[0]);   // 85
