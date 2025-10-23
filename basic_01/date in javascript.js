let myDate = new Date()
console.log(myDate.toString()); //Thu Oct 23 2025 12:10:19 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Thu Oct 23 2025
console.log(myDate.toLocaleString());   //10/23/2025, 12:10:19 PM
console.log(myDate.toLocaleTimeString());   //12:10:19 PM
console.log(myDate.toUTCString());  //  Thu, 23 Oct 2025 12:10:19 GMT
console.log(myDate.toJSON());       //  2025-10-23T12:10:19.741Z
console.log(typeof myDate); //object


// way's of defining dates

// let myCreatedDate = new Date(2023, 0, 23)       
// // 1/23/2023, 12:00:00 AM
// date only time is given automatically

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)     
//1/23/2023, 5:03:00 AM
// gives time too

// let myCreatedDate = new Date("2023-01-14")      
//  1/14/2023, 12:00:00 AM
//similar to the first one only diff is way of giving input


// let myCreatedDate = new Date("01-14-2023")
// 1/14/2023, 12:00:00 AM
// same as above

// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);   //1761221706920
// console.log(Math.floor(Date.now()/1000));   //1761221765

let newDate = new Date()
console.log(newDate);   // 2025-10-23T12:16:40.810Z
console.log(newDate.getMonth() + 1);    // 10
// get's the current month

console.log(newDate.getDay());  // 4
// get the current day 

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})

// using this we can manually modified and change the defined behaviour of function