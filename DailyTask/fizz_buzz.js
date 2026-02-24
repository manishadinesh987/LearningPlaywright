// ✅ FizzBuzz Test:

// Write a program that prints numbers from 1 to 100. 
// However, for multiples of 3, print "Fizz" instead of the number,
//  and for multiples of 5, print "Buzz."
//   For numbers that are multiples of both 3 and 5, print "FizzBuzz."

for(let num = 1; num <=100 ; num++){
    if(num % 3 == 0 && num % 5 == 0){
        console.log("FizzBuzz");
    }else if(num % 5 == 0){
        console.log("Buzz");
    }else if(num % 3 == 0){
        console.log("Fizz");
    }else{
        console.log(num);
    }
}