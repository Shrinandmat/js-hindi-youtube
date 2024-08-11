const name = "Shrinand";
const repocount = 50;

console.log(name + repocount + " value");
// We don't use + instead of that we use backticks -> viz. Template Literal


console.log(`Hello my name is ${name} and I have ${repocount} repos`);

const gameName = new String('hiteshhc');

console.log(gameName);

console.log(gameName[0]);

console.log(gameName.__proto__);


console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('h'));

const newstring = gameName.substring(0,4);
console.log(newstring);

const anotherString = gameName.slice(-4,5);
console.log(anotherString);

const newstringone = "       hitesh  ";
console.log(newstringone);

console.log(newstringone.trim());

const url = "https://google.com";
;
console.log(url.replace('o','u'));