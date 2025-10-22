// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//        ^
//        |

//basic code for comparison

// console.log("2" > 1);  //true
// console.log("02" > 1);  // true

// it automatically convert the string into number when used beside comparision operator

// console.log(null > 0);  //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// the comparision with null is littel complecated but let me do it simple for u
// the working of > == and >= is different the there own term the >= operator is converting the null valur into 0 while comaparing
// mostly do not use this kind of comparision makes code complicated

console.log(undefined == 0);    //false
console.log(undefined > 0);     //false
console.log(undefined < 0);     //false

// In undefined it does not do anu thing bc it is not getting converted in any thing
//if we do:
let str1;
console.log(undefined == str1) 
// this code will be true bc of the let variable is not defined mostly used for assignment of variable and more thing in production



// === 

console.log("2" === 2);

// this === operator is used for comparing the value and also the type the value is in 
// let se the above code the '2' is a string in normal == operation it would be true but in === operator it would be false so 
// it check the value and the type it is from 
