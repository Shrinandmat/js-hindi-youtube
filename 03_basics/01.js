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
