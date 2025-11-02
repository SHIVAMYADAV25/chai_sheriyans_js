let name = "shivam";

let CGP = 9.8

//console.log("hello my name is " + name + " i got " + CGP +" CGP"); //hello my name is shivam i got 9.8 CGP
// bad way of writting code use backticks 

//console.log(`hi my name is ${name} and i got ${CGP} CGP`)  //hi my name is shivam and i got 9.8 CGP
//looks clean and effective

let str1 = new String("shivamDotDev");

//console.log(str1[0]); //s
//console.log(str1.__proto__); //mostly seen on browser not on nodejs o/p will be lst of funtion can be used in string


// console.log(str1.length); // give length of the string starting from 0 
// console.log(str1.toUpperCase()); // gie string in uppercase
//console.log(str1.charAt(2)); // i //gives where the value index is 
// console.log(str1.indexOf('t')); // 8 // opposite of charAt

const newString = str1.substring(0, 4)  
// give th string from starting index 0 and the last that is n-1 i.e 4-1 which is 3 so op is shiv
console.log(newString);

const anotherString = str1.slice(4, 6) // 4th element is skipped and the starting from 5 to the 6 so ans is am
console.log(anotherString);


const newStringOne = "   shivam    "
console.log(newStringOne.length); 
// length is 13
console.log(newStringOne.trim().length); // remove the spaces includes in the string 
// length is 4



const url = "https://shivam.com/shivam%20yadav"

console.log(url.replace('%20', '-')) // replace the string from one to another

console.log(url.includes('sundar')) // gives the o/p as true of false if the parameter is in the string then true or else it is false

// if let str1 = new String("shivam-Dot-Dev");
console.log(str1.split('-')); //[ 'shivam', 'Dot', 'Dev' ]
// indirectly create and array depending on the second parameter moslty i have used blank space