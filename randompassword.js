let length =10;
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let pass = "";


for (let i=0; i<=length; i++ ){
    str += '123456789'
    str += '~!@#$%^&*'
    str+= '[]{}?/`<>,./*-+'
    let char = Math.floor(Math.random() * str.length + 1)
    pass +=  str.charAt(char)
}
console.log(pass)

 
