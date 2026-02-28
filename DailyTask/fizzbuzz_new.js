// Optimized FizzBuzz (concise and fast)
// Prints numbers from start to end, substituting "Fizz", "Buzz", or "FizzBuzz".

function fizzBuzz(start = 1, end = 100) {
    for (let i = start; i <= end; i++) {
        const fizz = i % 3 === 0 ? 'Fizz' : '';
        const buzz = i % 5 === 0 ? 'Buzz' : '';
        console.log(fizz + buzz || i);
    }
}

// Run the default range 1..100
fizzBuzz();
