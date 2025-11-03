// syntax:
if(condition){
    scope;
}

// In condition it should be true only then the code inside the if will run

// eg
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// using in condition operator !== and === one is one equal to another check the type of the var also
// <, >, <=, >=, ==, !=, ===, !== 

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000


//bad way of writting code do not use this
// if (balance > 500) console.log("test"),console.log("test2");

// if else elseif code
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// && there should be only true valur no false
// || any where in consdition if there is ture then the whole consition is true