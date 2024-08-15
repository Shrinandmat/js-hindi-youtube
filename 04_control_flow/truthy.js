const username = "h@hitesh.ai";
if(username){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy value
// "0" , 'false' , " " , [] , {} , function() {}

// if(username.length === 0){
//     console.log("Array is empty");
// }

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("Empty Object");
}

// Nullish Coalescing operator
let val1;
val1 = 5 ?? 10
console.log(val1);

val1 = null ?? 10;
console.log(val1);

val1 = undefined ?? 15;
console.log(val1);

// Ternary operator
// condition ? true : false

const iceteaprice = 100;
(iceteaprice <= 80) ? console.log("Less than 80") : console.log("Greater than 80");
