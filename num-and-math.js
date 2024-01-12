const score = 400;
//console.log(score);

const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

let num = 100000000;
// console.log(num.toLocaleString());
// console.log(num.toLocaleString('en-IN'));

//++++++++++++ maths ++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));//it makes the negative value to the positive and make positive value remain positive
// console.log(Math.round(4.5885));//it makes the roundoff of the value
//console.log(Math.random());//math.random hameha 0 se 1 ke beech mai he aati hai or har baar alag alag aati hai
//console.log((Math.random()*6) +1 );// ye ek dice game hai is tarha se number ko kisi perticular digit ke beech mai define kar sakte hai
//console.log(Math.floor(Math.random()*6) +1 );//math.floor use karke exact number aata hai koi decimal digit nai aati hai

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1 )) + min);