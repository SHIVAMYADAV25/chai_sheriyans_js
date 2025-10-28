// normal function creation

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// calling a function
// sayMyName()

// using console no return value if the function is store in any return value then it will shoe undefined
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// return value can be store in variable if no return then undefined
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2      // use of return
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){  // check if user exist
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage()) // sam just logged in
// console.log(loginUserMessage("hitesh")) // hitesh just logged in


// using spread operator

// ... is rest and spread operator
// so in this the val1 and val2 is having 200 and 400 as an value an ...num1 is having 500 and 2000
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))    //[ 500, 2000 ]

const user = {
    username: "hitesh",
    prices: 199
}

// pass object into the function
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// passing object
// handleObject(user)  //Username is hitesh and price is undefined
//  handleObject({
//     username: "sam",
//     price: 399
// })      //Username is sam and price is 399


// passing array as an argument in function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]  // access it in the normal way
}

console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([200, 400, 500, 1000]));  //400