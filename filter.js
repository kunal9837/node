//filter
//1) filter ko use  kiya jata hai condtion check karne ke liye array mai
//2) filter mai retrun keyword use hota  hai 


// const numberpattern = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const number = numberpattern.filter( (num) => {
//    return num > 4;
// })
// console.log(number)

// const books = [
//     {title: "book one", genre: "fiction", publish: "2001"},
//     {title: "book two", genre: "crime", publish: "2002"},
//     {title: "book three", genre: "history", publish: "2003"},
//     {title: "book four", genre: "art", publish: "2004"},
//     {title: "book five", genre: "history", publish: "2005"},
//     {title: "book six", genre: "action", publish: "2006"},
//     {title: "book seven", genre: "art", publish: "2007"}
// ]

// let newbook = books.filter( (bk) => {
//     return bk.genre === 'art'
// })

//  newbook = books.filter( (bk) => {
//     return bk.publish >= '2001' && bk.genre ==='history'
// })
// console.log(newbook)



    
    const employee = [
        {
          "id": "1",
          "firstName": "Tom",
          "lastName": "Cruise",
          "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
        },
        {
          "id": "2",
          "firstName": "Maria",
          "lastName": "Sharapova",
          "photo": "https://jsonformatter.org/img/Maria-Sharapova.jpg"
        },
        {
          "id": "3",
          "firstName": "Robert",
          "lastName": "Downey Jr.",
          "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg"
        }
      ]
    
  const newemployee = employee.filter( (e) => {
    return e.id === '2'
  })
  console.log(newemployee)