// In js we use print as console.log("");
console.log("Shrinand Mathpati");
console.log("Welcome to Apna college");
console.log("My first JS program");


// Js has dynamically typed variables we don't need to define datatype
name = "Tony Stark";
console.log(name);

price = 250;
console.log(price);

height = 12.5;
console.log(height);

istrue = false;
console.log(istrue);

value = null;
console.log(value);

$firstname = "Shradha";
console.log($firstname);
// ap;
// console.log(ap);

// var ,let , const

var variable = 20;
var variable =30;
var variable = 40;

// This is the issue with var we can define a same variable multiple times

// let is used for declaring variable once and then updating their values multiple times

let a = 30;
a = 100;
a = 200;

console.log(a);

// const is used to declare the constant whose value can't be changed once declared

const pi = 3.14;
// pi = 6.28; this provides error
console.log(pi); 

console.log(pi);

let b;
console.log(b);

// This provides undefined value

{ // This is called a block which is  between two curly braces
let f = 0;
console.log(f);
}
// console.log(f);  This will give error as the scope of variable is within the block

let age = 25;
console.log(typeof age);

let temp = 34.445;
console.log(typeof temp);

let friend = "Rinku Sharma";
console.log(typeof friend);

let x = null;
console.log(typeof x);

let k;
console.log(typeof k);

let num = BigInt("123");
console.log(num);
console.log(typeof BigInt);

let u = Symbol("POPP");
console.log(u);
console.log(typeof u);

// Objects in JS
const student = {
    name :  "Rahul",
    marks: 23,
    div:"A",
    Roll_no:26
}

console.log(student);

const Profile ={
    my_name : "Shrinand Mathpati",
    my_email : "mathpatishreenand@gmail.com",
    my_phone : 8767122040,
    my_addr  :"Pune"
}


console.log(Profile.my_addr);
console.log(Profile.my_phone);

console.log(Profile.my_email);

Profile["my_email"] = "yashironspidy@gmail.com";
console.log(Profile["my_name"]);
console.log(Profile["my_phone"]);
console.log(Profile["my_email"]);



const product = {
    title: "Ball Pen",
    rating : 4,
    offer : 5,
    isdeal : true
}

console.log(product);

console.log("abc" + 2);
console.log("abd" + 'f');
