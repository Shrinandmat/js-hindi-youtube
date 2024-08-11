const score = 400;
const balance = new Number(100);
console.log(balance);
console.log(score);


console.log(balance.toString().length);
console.log(balance.toString());
console.log(balance.toFixed(2));



const othernum = 1123.3878;
console.log(othernum.toPrecision(3));


const hundreds = 1000000;
// Converting number into Indian rupees
console.log(hundreds.toLocaleString('en-In'));


console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-3));
console.log(Math.round(4.5));
console.log(Math.ceil(7.8));
console.log(Math.floor(5.6));
console.log(Math.min(5,6,3,2,8,7,9));
console.log(Math.max(5,6,3,2,8,7,9));
console.log(Math.random());

// Math.random gives you values between 0 and 1
const min = 10;
const max = 20;
// If we want numbers in this range
console.log(Math.floor(Math.random() * (max - min + 1)) + 1);

