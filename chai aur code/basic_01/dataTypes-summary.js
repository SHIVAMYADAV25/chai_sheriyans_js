//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100  // number
const scoreValue = 100.3 //number

const isLoggedIn = false  //boolean
const outsideTemp = null  //null
let userEmail;   //undefined

const id = Symbol('123')  // symbol
const anotherId = Symbol('123')  // symbol

//symbol is nostly used for it's uniqueness that is to symbol is given same value the comparsion will be different

console.log(id === anotherId); //false

 const bigNumber = 3456543576654356754n  //bignit
//mostly used for storing large number

console.log(typeof bigNumber); //bigint

//Reference types
//Array , objects , function

let Arr = ["hii" , "its" ,"me"]
console.log(typeof Arr); //object

let obj ={
    "A" : "B",
    "C":"D"
}

console.log(typeof obj); // object

let fun = function(){
    console.log("hello");
}

console.log(typeof fun) // funtion


//summary there are two types premitive and no-premitive
// number , string , null , undefined , biginit , symbol are primitive type
// array , function , object are the type of non-prmitive
// array typeof is object

