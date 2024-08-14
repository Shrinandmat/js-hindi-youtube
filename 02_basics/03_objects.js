// There are two ways of creating object singleton -> using constructors and object literals

// object literals
// objects are stored as key value pairs

// We are creating the symbol
const mySym = Symbol("mykey1");

// We can't add symbol name directly as we are adding strinh
const JsUser = {
 name : "Hitesh",
 age : 18,
 "fullname" : "Hitesh Choudhary",
 mySym : "myKey1", // This will add a string
 [mySym] : "myKey1", // This is the correct way to add symbol
 location : "Jaipur",
 email : "hitesh@google.com",
 isloggedin : false
}
// one way to access the value of the object
console.log(JsUser.name);

// console.log(JsUser[email]);

//pass the variable name as the string
console.log(JsUser["email"]);

console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);
console.log(JsUser.fullname);
console.log(JsUser["fullname"]);
JsUser.email = "hitesh.chatgpt@gmail.com";
console.log(JsUser["email"]);

Object.freeze(JsUser);
JsUser.email = "hitesh.microsoft@gmail.com";
console.log(JsUser["email"]);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

// console.log(JsUser.greeting());
console.log(JsUser.greeting);

JsUser.greeting2 = function(){
    console.log(`Hello Js User ${this.name}`);
}


console.log(JsUser.greeting2());