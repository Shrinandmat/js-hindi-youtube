const user = {
    username : "hitesh",

    price : 900 ,

    Welcomemessage : function(){
         console.log(`${this.username} welcome to website `);
        //  console.log(this); // It prints the object
    }
}


user.Welcomemessage();

user.username = "Sam";
user.Welcomemessage();

// console.log(this); This will print empty object


function chai(){
    let username = "Hitesh";
    console.log("The username is " + this.username); // This keyword is used only for objects
}

chai();


// const chai2 = function() {
//     username = "Hitesh";
//     console.log(this.username); 
//     console.log(this);


// }




const chai2 = () =>{
    const usernamme = "Shrinand";
    console.log(this.username); // Gives undefined
}

// This keyword also works in arrow function


chai2();


// const addtwo = (num1 , num2) =>{
//     return num1 + num2;
// } 

// console.log(addtwo(2,3));


// const addtwo = (num1 , num2) => (num1 + num2); // If we don't use curly paranthesis we can directly retuen using round paranthesis

// console.log(addtwo(2,3));


const addtwo = (num1 , num2) => ({username : "Hitesh"}); // We are returning object


console.log(addtwo(2,3));

// IIFE -> Immediately invoked arrow function

// This function is getting invoked automatically
(function chai(){
    console.log(`DB CONNECTED`);
} 
)(); // We need to give this semi colon because 


( () =>{
    console.log(`DB Connected two`);
}    
)();


((name) =>{
    console.log(`This is IIFE arrow function by ${name}`);
})("Hitesh");





