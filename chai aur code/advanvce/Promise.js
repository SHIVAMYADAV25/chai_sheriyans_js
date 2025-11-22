const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        // console.log('Async task is compelete');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    // console.log("Promise consumed");
})

// IMP = > to connect .then to actual promise use the resolve(); function and call that inside promise 

// IMP => to pass value to .then give the value in resolve like this resolve("shivam") this will be passed to 
// .then(name) =>console.log(name); check the third example

// o/p:
// Async task is compelete
// Promise consumed


// promise means jiska kaam future mai jaake pura hone wala hai
// gives two state (pending / fulfilled / rejected)
// previous was no promise function there was lib (Q/bluebrid) not used know bc it was introduced in js by nodejs


new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    // console.log("Async 2 resolved");
})

// o/p:
// Async task 2
// Async 2 resolved

// passing value to then using the resolve

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// o/p:
// { username: 'Chai', email: 'chai@example.com' }

// error handling in promise using then catch

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//multiple .then and finally

 promiseFour // cannot store the value of the promise (by seeing this the return will pas the value to the next 
 // .then doing let value = prmoiseFour.then((user) => {console.log(user);return user.username) will return an error ifp print value
 .then((user) => {
    console.log(user);
    return user.username  // can pass the value to the next .then
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


// o/p:
// ERROR: Something went wrong
// The promise is either resolved or rejected


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive  // promise is an object cannot do like promiseFive()
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// o/p:ERROR: JS went wrong


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // data comming as string
        console.log(response)
        // its takes time so put await before converting
        const data = await response.json() // convert in JSON formate 
        console.log(data[0]);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers();

// another way of doing it

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// end:
// {
//   id: 1,
//   name: 'Leanne Graham',
//   username: 'Bret',
//   email: 'Sincere@april.biz',
//   address: {
//     street: 'Kulas Light',
//     suite: 'Apt. 556',
//     city: 'Gwenborough',
//     zipcode: '92998-3874',
//     geo: { lat: '-37.3159', lng: '81.1496' }
//   },
//   phone: '1-770-736-8031 x56442',
//   website: 'hildegard.org',
//   company: {
//     name: 'Romaguera-Crona',
//     catchPhrase: 'Multi-layered client-server neural-net',
//     bs: 'harness real-time e-markets'
//   }
// }
// { username: 'Chai', email: 'chai@example.com' }
// ERROR: Something went wrong
// The promise is either resolved or rejected
// ERROR: JS went wrong
// @SHIVAMYADAV25 ➜ /workspaces/chai_sheriyans_js/chai aur code/advanvce (main) $ node Promise.js 
// 1
// { username: 'Chai', email: 'chai@example.com' }
// ERROR: Something went wrong
// The promise is either resolved or rejected
// ERROR: JS went wrong

// as u can see the fetch data is comming first because of priority queue

//promise.all kuchto hota hai