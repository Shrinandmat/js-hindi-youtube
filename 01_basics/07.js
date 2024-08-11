let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());

console.log(typeof mydate);

let mycreateddate = new Date(2023 , 0 , 23);
console.log(mycreateddate.toDateString());

let my_date = new Date(2023 , 0 , 23 , 5 ,3);
console.log(my_date.toLocaleString());

let my_date2 = new Date("2023-01-14");
console.log(my_date2.toLocaleString());

let my_date3 = new Date("01-03-2019");
console.log(my_date3.toDateString());

let mytimestamp = Date.now();

console.log(mytimestamp);

console.log(Date.now());

// It gives value in milisecond
console.log(Math.floor(Date.now()/1000));

