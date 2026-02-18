// hoisting with let
// let a = 10;

// if(true){
//     // console.log(a); // This would throw a ReferenceError because 'a' is not accessible in this scope due to TDZ (Temporal Dead Zone)
//     let a = 20;
//     console.log(a);
// }


var b= 10;

if(true){

    console.log(b);
    var b = 20;
    console.log(b);
}