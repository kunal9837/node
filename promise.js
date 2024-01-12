// const promiseone = new Promise((resolve, reject)=>{
//     //do an async task
//     //db calls, cryptography, network
//     setTimeout(() => {
//         console.log('async task is complete')
//         resolve()
//     }, 1000);
// })
// promiseone.then(()=>{
//     console.log("promise consumed")
// })

// new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("async task 2");
//         resolve()
//     }, 1000);
// }).then(()=>{
//     console.log("async 2 resolved")
// })

// const promisethree = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     resolve({username: "kunal", email: "k@gmail.com"})    
//     }, 1000);
// })
// promisethree.then((user)=>{
//     console.log(user)
// })

// const promisefour = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({username: "kunal", password: "1234"})
//         }
//         else{
//             reject('error something went wrong')
//         }
//     }, 1000);
// })
// promisefour
// .then((user)=>{
// console.log(user)
// return user.username
// })
// .then(()=>{
//     console.log(username)
// })
// .catch((error)=>{
// console.log(error)
// })
// .finally(()=>{
//     console.log("the promise is either resolved or rejected")
// })


// const promisefive = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({username: "java", password: "1234"})
//         }
//         else{
//             reject('error js went wrong')
//         }
//     }, 1000);
// })

// async function consumepromisefive(){
//   try {
//     const response = await promisefive
//     console.log(response)
//  }
//    catch (error) {
//     console.log(error)
//   }
// }consumepromisefive()

async function getalluser(){
   try {
    const response = await fetch('https://randomuser.me/api/');
   const data = await response.json()
   console.log(data)
   } catch (error) {
    console.log(error)
   }
}

getalluser();