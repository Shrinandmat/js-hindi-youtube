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
    console.log(this);
}

chai();
