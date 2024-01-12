//array
const myarray = [1,2,3,4,5,6,7,8,9];
//console.log(myarray[0]);

const abc =  new Array("hero","soumya", "naytik");
//console.log(abc[0]);

//array methods
// myarray.push(10);
// myarray.pop();//jo bhi last value hoti  hai array mai usko delete kar deta hai
// console.log(myarray.includes(20));//includes true or false ki form mai batata hai ki value hai ya nai hai
// console.log(myarray);
// console.log(myarray.indexOf(3));//indexof array hai index ki value batata hai 

const newarray = myarray.join();//join array hai jitni bhi value hai unko string ki formm hai show karta hai
// console.log(myarray);
// console.log(newarray);
// console.log(typeof newarray);

console.log("A", myarray);

const myn1 = myarray.slice(1, 3);

console.log(myn1)
console.log("B", myarray);

const myn2 = myarray.splice(1,3)//jab splice use karte hai tab original array affect hota hai 
console.log("C", myarray);
console.log(myn2)