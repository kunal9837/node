let marval_hero = ["iron man", "thor", "blackpanthar"];
let dchero = ["superman", "flash", "batman"];

// console.log(marval_hero)
// marval_hero.push("kutta man");
// console.log(marval_hero)
//marval_hero.push(dchero);//jab ham puch mai ek new arrry ko puch karte hai to pura array ek index par shift ho jata hai
// console.log(marval_hero);
// console.log(marval_hero[3])//is line mai pura array third index par shift ho gaya hai

//upar wali problem ko solve karne ke liye concat ka use kiya jata hai

// const allheros = marval_hero.concat(dchero);
// console.log(allheros)//is proble ko solve karne ka ek or tarika hai vo hai spread oprator

//spread operator

const all_new_heros = [...marval_hero, ...dchero];
 console.log(all_new_heros)
 

console.log(Array.from("kunal singh"));//Array.form() use hota hai kisi bhi cheej ko array banane mai

