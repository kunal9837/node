function saymyname(){//functions eese he define hote hai 
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("H");
}
//saymyname();//function ko eese he call kiya jata hai

// function addtwonumber(number1, number2){
    
//     console.log(number1 + number2)
// }
function addtwonumber(number1, number2){
    
    // let result = number1 + number2;
    // return result // return ke baad kuch bhi print nai hota hai or jab hai return karenge tab hai uske kisi cheej mai store kar sate hai
    //     console.log("kunal")

    return number1 + number2;
}
const result = addtwonumber(3,4)
//console.log("result", result)

function loginusermessage(username){
    if(username === undefined){
        console.log("please enter a username")
    }
    else{
        return `${username} just logged in`
    }
 
}
//loginusermessage("kunal");//ye print nai hoga
//console.log(loginusermessage());//ye wala print hoga
//console.log(loginusermessage("kunl"));//jab ismai  kuch bhi pass nai karte hai to undefined aata hai null nai aata hai

function calculatecartprice(...num1){//agar ... ye nai karenge to bas 200 pirnt hoga  
 return num1;
}
//console.log(calculatecartprice(200,300,400,500))

//how to use object in function

const user = {
    username: "kunal",
    price: "100000"
}

function userhandle(anyobject){
    console.log(`username is ${anyobject.username} price is ${anyobject.price}`)
}
userhandle(user)

//how too use array in fucntions

const myarray = [200,100,400,700,600];

function returnsecondvalue(getarray){
 return getarray[1]
}
console.log(returnsecondvalue(myarray))