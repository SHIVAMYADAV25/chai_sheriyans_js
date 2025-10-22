let score = true;

//let {scroce} = req.body;  // dont know what going to come


//let score = 100 
//console.log(typeof score);  //number
//console.log(score)  //100


//let score = "100";
//console.log(typeof score);  string
//console.log(score) 100


// let score = "100abc";
// score = Number(score)
// console.log(typeof score);  //number
// console.log(score) //NaN

//let score = "NULL";
//score = Number(score)
//console.log(typeof score);  //if converting in number it would be number and if not converting it would be object
//console.log(score) // if converted it would be 0 or else it would be null


// let score = "undefined";
// score = Number(score)
// console.log(typeof score);  //number
// console.log(score) //NaN

// let score = "true";
// console.log(typeof score) //boolean
// score = Number(score)
// console.log(typeof score);  //number
// console.log(score) //1


// "33"=> 33
// "33abc:" => NaN
//true = 1 and false = 0




//boolean
let isLoggedIn = 1;
let check = Boolean(isLoggedIn)
//console.log(check); //true
//console.log(typeof check); //boolean


// "" => false 
//"shivam" => true
// 1 => true
//0 => false


//string

let num = 55;
//console.log(typeof num); //number
let constring = String(num)
//console.log(typeof constring); //number
//console.log(constring); //55

// Instring the converstion is done mostly seen using the typeof

//******************************************operation on string **************************************************************

// let value = 3;
// console.log(-value); // -3


// console.log(2+2);
// console.log(2-2);
// console.log(2%2);
// console.log(2/2);
// console.log(2**2);
// console.log(2*2);


// let str1 = "shivam"
// let str2 = " yadav"

// console.log(str1 + str2);  // concadination 
// o/p shivam yadav

// console.log("1" + 2); 12
// console.log(1 + "2"); 12
// console.log("1" + 2 + 2); 122
// console.log(1 + 2 + "2"); 32
//            ^
//            | 
// operation precedense in js is done by the left to right herarchy


// this are the bad way of writting the code 
// console.log(+true); // 1
// console.log(+""); //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2


let counter = 100;
counter++
console.log(counter) //101 (increment by 1)

// study at
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


// there are so many conversion like 
// tobigint
// tostring 
// tonumber 
// toobject 
// tolength 
// toindex 
// ordinarytoprimitive 
// toboolean 
// tointeger and more
//  everything conversion has different o/p depending on the input type provided  

