import userData from "./data.js";

/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/
function transformData(data){
    // map over the data.js array 
    // create a new object
    // combine ["name"]["first"] and ["name"]["last"] into a string
    // use toDateString on ["dob"]["date"]

   data.map((name) => {
    let dt = new Date(name.dob.date)
    return {
        fullName: `${name.name.first} ${name.name.last}`,
        birthday: `${dt.toDateString()}`
    }
   })
}


console.log(transformData(userData));
// console.log(userData[0]["name"]["first"], userData[0]["name"]["last"])
// console.log(userData[0]["dob"]["date"])

// function transformData(data){
//     const revisedData = data.map(item => {
//         return {
//             fullName: `${item.name.first} ${item.name.last}`,
//             birthday: convertDate(item.dob.date)
//         }
//     })
//     return revisedData;
// }

// const convertDate = (dateString) => {
//     const dateDate = new Date(dateString);
//     return dateDate.toDateString();
// }

// console.log(transformData(userData));