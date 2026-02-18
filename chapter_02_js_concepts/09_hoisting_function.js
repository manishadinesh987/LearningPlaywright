// step 1 - definition of function
function getUserStatus(){
    console.log(status_code);
    var status_code = "active";
    console.log(status_code);


}

// step 2 - calling of function
getUserStatus();

// var is function scoped and status_code is hoisted to the top of the function getUserStatus, but its value is not assigned until the line where it is declared. Therefore, when we try to log status_code before its declaration, it will output undefined. After the declaration, it will output "active".