function one(){
    const username = "hitesh";

    function two(){
    const website = "youtube";
    console.log(username); // This is accesible but website is not accessible outside
    }

    two();

    // console.log(website);
}

one();


if(true){
    const username = "hitesh";

    if(username === "hitesh"){
        const website = " youtube";
        console.log(username + website);

    }
    // console.log(website);

}


// console.log(username);

const number = addtwo(4);
console.log(number);

function addtwo(num){
    return num + 2;
}

