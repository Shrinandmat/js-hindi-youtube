const arr = [1,4,5,6,7,9];
// Array does not has specific size and we can also add different datatypes into same array
console.log(arr[3]);

const heroes = ["Shaktiman" , "Naagraj"];
console.log(heroes[1]);

const myarr2 = new Array(1,2,3,4,5);
console.log(myarr2[3]);

// push adds element at the end
myarr2.push(6);
console.log(myarr2[5]);

myarr2.push(7);
// pop removes element from the end
myarr2.pop();

console.log(myarr2);
// unshift adds the element from the start
myarr2.unshift(9);
console.log(myarr2);

// shift removes the element from the start
myarr2.shift(myarr2);
console.log(myarr2);


// includes finds whether the element includes in the array or not
console.log(myarr2.includes(1));


// indexof finds the index of element
console.log(myarr2.indexOf(2));
console.log(myarr2);

// join is used to convert array into the string
const newarr = myarr2.join();
console.log(newarr);
console.log(typeof newarr);

console.log("A" + myarr2);
const myn1 = myarr2.slice(1,3);
console.log("B",myn1);
// In slice origional array never changes and it has exclusive range
console.log("A" + myarr2);
const myn2 = myarr2.splice(1,3);
// In splice it has inclusive range and it removes elements from origional array and manipulates it
console.log("Origional",myarr2)
console.log("Spliced",myn2);











