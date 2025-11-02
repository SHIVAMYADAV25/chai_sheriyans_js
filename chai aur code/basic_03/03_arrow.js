const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// this ka use value access in an access able area 
// like in above the this is accesable all the object

// user.welcomeMessage()
// hitesh , welcome to website
// {
//   username: 'hitesh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

user.username = "sam"   // change the value 
// this can access it and give the updated value


// user.welcomeMessage()
// sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }



console.log(this);
// this will return empty object {}
// but if u run this in browser then there will other o/p like window document and all


// this in normal function
// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // return undefined
// }

// chai()


const chai =  () => {
    let username = "hitesh"
    console.log(this);  // this will return empty object {}
}


// chai()


// way of declaring the arrow function

// needs to manually write the return statement
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// no need to write the bracket and return statement
// const addTwo = (num1, num2) =>  num1 + num2 // will give the o/p no return keyword required


const addTwo = (num1, num2) => ( num1 + num2 ) 
// act same work when return array object or function without ()

// eg:
// const addTwo = (num1, num2) => ({username: "hitesh"})
// return { username: 'hitesh' }


// console.log(addTwo(3, 4))



// use in foreach, map, much , etc
// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() => () || {})