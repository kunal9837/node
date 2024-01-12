//object hamesha key value ki form mai hota hai

//object literals
const mysym = Symbol("key1");

const jsuser = {
    name: "kunal",
    "fullname": "kunal singh",
    age: 28,
    [mysym]: "mykey1",
    location: "aligarh",
    email: "kunalsingh.aligarh7896@gmail.com",
    isLoggedIn: false,
    lastlogindays: ["monday", "saturday"]
}
//do tarike hai isko access karne ke

// console.log(jsuser.name);// ye first tarika hai 
// console.log(jsuser["name"])
// console.log(jsuser["fullname"]);// or ye second tarika hai
// console.log(jsuser[mysym])//is tarha se symbol ko access kiya jata hai

jsuser.email = "bhumasingh@gmail.com"// is tarha se value ko change karte hai objects  mai
console.log(jsuser)
Object.freeze(jsuser)// isko use karne ke baad koi bhi change nai ho sakta hai ye freeze kar deta hai sab kuch
