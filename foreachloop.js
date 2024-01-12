//foreach
//1) foreach kabhi bhi  koi bhi value return nai karta hai means retun keyword use he nai ho sakta hai

const myarray = ["kunal","naytik","raju","rani","raja","rohan","rohit"]

// myarray.forEach((itme) => {
// console.log(itme);
// })

// myarray.forEach(function (itme) {
//     console.log(itme);
// })

// myarray.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

const mycoding = [
    {
        languagenam: "java",
        languagefilename: "ja"
    },
    {
        languagenam: "python",
        languagefilename: "py"
    },
    {
        languagenam: "html",
        languagefilename: "html"
    },
    {
        languagenam: "javascript",
        languagefilename: "js"
    },
]

// mycoding.forEach( (item) => {
//  console.log(item.languagenam);
// })

mycoding.forEach( (item) => {
    console.log(item);
})