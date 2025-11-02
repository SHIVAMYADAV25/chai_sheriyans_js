// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "SHivam",
    "full name": "Shivam Yadav",
    [mySym]: "mykey1",
    age: 18,
    location: "Thane",
    email: "Shivam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// two way of accessing element in js one is using dor and another is using [](brakets) 
// inside braket give inverted coima("") because in js the key are store as string

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) example of why use the another bracket way of accesing value

// console.log(JsUser[mySym])  
// // first create an symbol outside the object then store it inside object like [Mysym] this so when u print like this [Symbol(key1)]: 'mykey1'

JsUser.email = "hitesh@chatgpt.com" // way of inserting data in object
// Object.freeze(JsUser)  // can freeze the object there will be no curd operation
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

//can define function in object
JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this is use to acces data inside the object
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());