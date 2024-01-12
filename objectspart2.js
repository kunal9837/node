// //const tinderuser = new Object()
const tinderuser = {};

tinderuser.id = "123abc";
tinderuser.name = "kunal";
tinderuser.isLoggedIn = false

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))

// console.log(tinderuser);

const regularuser = {
    email: "k@gmail.com",
    fullname: {
        username: {
            firstname: "kunal",
            lastname: "singh"
        }
    }
 }
// console.log(regularuser.fullname);
// console.log(regularuser.fullname.username)

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

//const obj3 = {obj1 , obj2}//ye or niche wala dono kam he use honge javascript mai
//const  obj3 = Object.assign({}, obj1 , obj2);
const obj3 = {...obj1, ...obj2}//ye wala method sabse jayada use hone wala hai aage bhi
console.log(obj3)

//destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseteacher: "kunal"
}

const {courseteacher} = course //ye bas ek syntx hai or ye he hota hai destructuring
console.log(courseteacher)
