const score = 400
// console.log(score); // 400

const balance = new Number(1000)
// console.log(balance); // [Number: 1000]


// console.log(balance.toString().length); // 4 
//return length
// console.log(balance.toFixed(1));    // 1000.0
//return fixed value which is provided in parameter after decimal

const num1 = 2312.32

//console.log(num1.toPrecision(2)); // 2.3e+3
// with 5 as input parames the o/p is 2312.3
// the o/p should be in that range

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));
// convert the string in the way of showing big number

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math.abs(-1)); // 1
// gives absolute value 

console.log(Math.round(23.2)); // 23 give round of value
console.log(Math.max(2,1,231,54,33422,3554)); //33422 give the max from and array or bunch of number
console.log(Math.ceil(4.5)); // give the largest integer and remove decimal // for 12.4 => 13 // for 4.3 => 5
console.log(Math.floor(4.9));  // gives the smallest integer opposite og ceil // for 4.6 => 4 // for 13.9 => 13
console.log(Math.min(23,453,223,57,3)); // give the minimum value from the list // 3



console.log(Math.random(10)*10); // return random value as number

// console.log(Math.random());  //0.5681160230165105
// console.log((Math.random()*10) + 1); // 4.998450690798987
// console.log(Math.floor(Math.random()*10) + 1);  //9 

// the value would be random so don't thing that it would get the same value 



