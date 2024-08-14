function Myname() {
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");

}

 
// function add(number1 , number2){  // parameters
// console.log(number1+number2);  // arguments
// }

function add(number1 , number2){  // parameters
    // console.log(number1+number2);  // arguments
    return number1 + number2;
    }


    let result = add(10,20);
    console.log(result);
Myname();
add(3,4);

add(3,"a");


function LoginUserMessage(username){
    if(username === undefined){
        console.log("Enter a valid username");
         return

    }
  return `${username} just logged in`;
}


// console.log(LoginUserMessage("Hitesh"));
console.log(LoginUserMessage());

// This is called as rest operator and we can pass multiple arguments and when we don't know the exact number of arguments
function calculateCartPrice(...num1){
    return num1
}


console.log(calculateCartPrice(100,200,400,500));


const user = {
    username : "shrinand",
    price : 300
}

// passing object in function

function name(anyobject){
    console.log(`The username is ${anyobject.username}  and the price is ${anyobject.price}`)
}

const myarr = [23,45,56,67,78,89];

// passing array in the function
function printelement(arrele){
    console.log(arrele[2]);
}

printelement(myarr);