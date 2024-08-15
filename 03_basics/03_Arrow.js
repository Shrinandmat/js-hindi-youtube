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
    // console.log(this.username); // This keyword is used only for objects
}

chai();


const chai = function() {
    username = "Hitesh";
    // console.log(this.username); 
    
}
