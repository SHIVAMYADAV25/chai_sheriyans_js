// prototype is like work indept access of the element (check layer by layer) access the parent => grand parent => great grand parent 
// it has all the access
// it will stop when it finds the null value in tree

// this keyword , class , new keyword all this thig is working bc of prototype

function multipleBy5(num){

    return num*5
}

// function is also an object
multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// 25
// 2
// {}  => this empty {} will store the value of this for example in this the value will be this.num = num so this.num will be store

// this sets the current context

function createUser(username, score){
    this.username = username
    this.score = score
}

// so at the end the function is an object so it can store another function in it this is how u do it
createUser.prototype.increment = function(){
    this.score++
    //here we have taken this.score because the time of creatu=ion of function there are many so to know the current increase
    //value passed we use this and for creation of function use new keyword it will make new instance rather than working on the 
    // same instance (nicha ka bhi padh lena new keywords ke baare mai)

    // in simple kisne bhi bulaya hai uska value use karo

}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
// so if we insert new functionality in the function using prototype while calling it . it will give u error
// so to stop the error we need to tell the calling function about the insert to do this we use new keyword
const tea = createUser("tea", 250)

chai.printMe() // gives error if not used new keyword while initialization

// so new keyword see that developer has initialize an external prototype 
// first insert the value in this
// second check for initailzation of external prototype (give access to them)
// third can execute (call prototype)


// 23:00
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/