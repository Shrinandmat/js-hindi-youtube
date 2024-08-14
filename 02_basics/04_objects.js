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

console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1 : "a" ,2 : "b"};
const obj2 = {3 : "c" , 4 : "d"};
const obj3 = Object.assign(obj1,obj2); 


console.log(obj3);

// cloning of single object
// assign method stores all the source objects into target objects 
// so we pass source as empty object
const obj = { a : 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

const obj4 = {5 : "c" , 6 : "d"};

// const obj5 = Object.assign({} , obj1,obj2, obj4);
// console.log(obj5);

// commonly used way
const obj5 = {...obj1 , ...obj2};
console.log(obj5);

const course = {
  coursename : "JsinHindi",
  price : "999",
  courseInstructor : "Hitesh"
}

// This is destructuring of the object
const {courseInstructor} = course;

console.log(courseInstructor);







