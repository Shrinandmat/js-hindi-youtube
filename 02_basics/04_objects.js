// const TinderUser = new Object();
// This creates singleton object

const TinderUser = {};

TinderUser.id = 200;
TinderUser.name = "Hitesh";
TinderUser.isloggedin = true;
console.log(TinderUser);

const regularuser = {
    email : "someone@gmail.com",
    fullname : {
      userfullname :{
        firstname : "Hitesh",
        lastname : "Choudhary"
      }
    }
}

console.log(fullname.fullname.firstname);