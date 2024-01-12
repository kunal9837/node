// //fetch the user

async function getalluser(){
   try {
    const response = await fetch('https://random-data-api.com/api/v2/users');
    const data = await response.json()
    console.log(data.id)
    
   } catch (error) {
    console.log(error);
   }
}
getalluser();

// let p = fetch('https://random-data-api.com/api/v2/users')
// p.then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data.email)
// })
// .catch((error)=>{
//     console.log(error)
// })