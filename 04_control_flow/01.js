const isuserloggedin = true;

if(isuserloggedin){
   console.log(isuserloggedin);
}

if(2 === "2"){
    console.log("Executed");
}

// < , <= , >= , > , != , == , ===

const temperatue = 41;
if(temperatue < 50)
    console.log("Less than 50");
else
    console.log("greater than 50");

    const score = 200;

    if(score > 100){
        const power = "fly";
        console.log(`The power is ${power}`);
    }

    // console.log(`The power is ${power}`);  value is out of scope

    // shorthand scope

    const balance = 1000;
    // if(balance > 500) console.log("Greater than 500") , console.log("test2");
 
     if(balance < 500){
        console.log("Balance is less than 500");
     }else if (balance < 750){
        console.log("Balance is less than 750");
     }else if(balance < 900){
        console.log("Balance is less than 900");
     }else{
        console.log("Balance is less than 1200");
     }

     const userloggedin = true ;
     const debit = true;
     const loggedinfromGoogle = false;
     const loggedinfromEmail = true;

     if(userloggedin && debit && 2 == 2){
        console.log("Allow to buy");
     }

     if(loggedinfromEmail || loggedinfromGoogle){
        console.log("User Logged in");
     }