const mynumber = [ 1, 2, 3 , 4 ,5 ,6 ,8 , 9, 10]

// const newnumber = mynumber.map( (n) => {
//         return n + 10;
// })

const newnumber = mynumber
                    .map( (n) =>( n * 10) )//agar {} ye use hoga to return keyword use hoga
                    .map( (n) =>( n + 1) )//agawr () ye use hoga to return keyword use nai hoga
                    .filter( (n) => ( n>= 40))
console.log(newnumber)