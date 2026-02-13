function add(a, b) {
    return a + b;
}

for (let i = 0; i < 100000000; i++) {
    add(i, i + 1);
}

console.log("Finished running hot code!");
