// Primitive
// String , Number , Boolean, null , undefined , Symbol , BigInt

// Reference (Non Premitive)

// Arrays , Objects , Function

// JS is dynamically typed

const score = 100;
const ScoreValue = 133.4;
const isloggedin = false;
const OutsideTemp = null;
let userEmail;

const id = Symbol('123');
const AnotherId = Symbol = ('123');
console.log(id === AnotherId); // It gives false

const bignumber = 12288737736648n;
console.log(typeof bignumber); // Bigint
const heroes = ["shaktiman" , "naagraj" , "doga"];

let Myobj = {
    name : "Hitesh",
    age : 20
}

const myfunc = function MYFUNC(){
    console.log("Hello World");
    
}

console.log( typeof myfunc);

console.log(typeof MYFUNC);


console.log(typeof "s");
console.log(typeof 123);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 123n);
console.log( typeof myfunc);
