const user = {
    username: "kunal",
    price: 999,
    
    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`)
       // console.log(this)
    }
}
// user.welcomemessage()
// // user.username = "sam";
// // user.welcomemessage()
// console.log(this)//ham node environment mai hai is liye this empty result show kar raha hai

// function chai(){
//     let username = "kunanl"
//     console.log(this.username)//result undefined aa raha hai mainly this object ke andar kaam karta hai naa ki function ke andar
// }
// chai()

//++++++++++++++++++++++++++++++++++++ arrow function +++++++++++++++++++++++++


let addtwonum = (num1 , num2) =>{// jab ye {} use hota hai to reutrn keyword use karna he hota hai
    return num1 + num2;
}
console.log(addtwonum(3,4))

let addtwono = (num1 , num2) =>( num1 + num2)// jab () ye karte hai to return keyword use nai karte hai or code ek single line mai likhna hota hai 

console.log(addtwono(10,4))
