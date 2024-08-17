let index = 0;
while(index <= 10){
    console.log(index);
    index++;
}


const arr = [1,2,3,4,5];

for(let i of arr){
    console.log(i);
}

const greeting = "Hello World";

for(const greet of greeting){
    console.log(`Each char is ${greet}`);
}

const map = new Map();

map.set('In' , "India");
map.set('US' , "United States");
map.set('Fr' , "France");


console.log(map);


for(const key of map){
    console.log(key);
}


for(const [key,value] of map){
    console.log("Key :" + key + " Value : " + value);
}