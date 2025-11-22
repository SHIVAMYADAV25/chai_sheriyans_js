// javascipt is prototype based language the oops concept are like coting around this

//object literal (collection of var and function)
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`); // this keyword like current context 
        console.log(this);
        // o/p: (current context)
        // {
        //     username: 'hitesh',
        //     loginCount: 8,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        // }
    }

}

user.getUserDetails()
// console.log(this) o/p : {}  talk about the global context there is nothing inside this
// but if we do this in browser there will be diff o/p (there area many API acces , fetch , window and more)


// constructor (can make many object from one source) (new keyword)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

// const userOne =  User("hitesh", 12, true)

// without new keyowrd when we create an another function the value get override and when we use the new keyword it create an use execution space where it will be having its own memory
// rather than acting on the same space

// const userTwo =  User("ChaiAurCode", 11, false);
// console.log(userOne);
// console.log(userTwo);

//<ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   navigator: [Getter],
//   crypto: [Getter],
//   username: 'ChaiAurCode',
//   loginCount: 11,
//   isLoggedIn: false,
//   greeting: [Function (anonymous)]
// }
// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   navigator: [Getter],
//   crypto: [Getter],
//   username: 'ChaiAurCode',
//   loginCount: 11,
//   isLoggedIn: false,
//   greeting: [Function (anonymous)]
// }

// as u can see the last made will override the context but when used the new keyword 
// they both will be having there own function memory and no overriding will happen

const userOne = new User("hitesh", 12, true)

const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne); 
console.log(userTwo);

// console.log(userOne.constructor);  also has an option to see constructor

// User {
//   username: 'hitesh',
//   loginCount: 12,
//   isLoggedIn: true,
//   greeting: [Function (anonymous)]
// }
// User {
//   username: 'ChaiAurCode',
//   loginCount: 11,
//   isLoggedIn: false,
//   greeting: [Function (anonymous)]
// }

//console.log(userTwo);


// steps
// 1) object gets create
// 2) constructor function get's called bc of new keyowrd
// 3) all the argument is inserted in this keyword
// 4) all the thing can be accessable to user