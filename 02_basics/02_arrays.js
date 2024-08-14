const marvel_heroes = ["thor","ironman","spiderman"];
const dc_heroes = ["superman" , "flash" , "batman"];

// push adds elements into existing array
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// concat add elements and provides new array
const allheroes = marvel_heroes.concat(dc_heroes);
console.log(marvel_heroes);
console.log(allheroes);

// spread operator
const allheroes2 = [...marvel_heroes , ...dc_heroes];
console.log(allheroes2);

const another_array = [1,2,4,[5,6,7] ,8,[12,23,[345,56]]];

// to concat all the arrays and give single array we use flat 
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// It will check whether it is an array or not
console.log(Array.isArray("Hitesh"));
// It converts the given input into array
console.log(Array.from("hitesh"));
 
console.log(Array.from({name:"Hitesh"})); // It does not gives the array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));