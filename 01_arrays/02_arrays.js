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