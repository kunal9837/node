//date 
let mydate = new Date();
// // console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toTimeString());
// console.log(mydate.getTime());
// console.log(typeof mydate);//date ka type hai objects

let myCreatedDate = new Date("07-04-1996");

//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000)); //reuslt second mai show ho jayega

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(newDate);