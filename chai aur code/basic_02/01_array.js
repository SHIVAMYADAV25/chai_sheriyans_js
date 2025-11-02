//Array

let Arr = [0,3,2,4,1 , true , "shivam"]

// can access element using the indexing method start's from 0 
// array is an object where we can store collection of different data item inside that
// can be re-sizeable  (insert/update/delete) can be perform
// can be mixable of othere datatype there can be array inside an array
// cannot be accessed using arbetrary way Arr["shivam"]
// work with changes in shallow copy (who's refrenec point is same any change in the copyed will get reflected in original one)
// does not do deep copy opp of shallow

// another way of declaring the array 
// let Arr = new Array(1,2,3,4)

// Array also support the prototype and have one length function inbuild check in browser

// Array method
Arr.push(9)
console.log(Arr);   //[ 0, 3, 2, 4, 1, true, 'shivam', 9 ]

Arr.pop(); // remove last value
console.log(Arr)    //[ 0, 3, 2, 4, 1, true, 'shivam' ]

// myArr.unshift(9)
// put element in front of the array
// myArr.shift()
// remove element from front of the array

console.log(Arr.includes(9));
// check if the element is present in to the array or nor give o/p in false or in true

console.log(Arr.indexOf(-3));
// same work only diff is that the o/p wil be -1 or 1 
// -1 for not present and 1 for it is present

const newArr = Arr.join() // convert the array in to string

console.log(Arr);
console.log( newArr); //0,3,2,4,1,true,shivam
console.log(typeof newArr); //string

//slice and splice

console.log("A ", Arr); // A  [ 0, 3, 2, 4, 1, true, 'shivam' ]

const myn1 = Arr.slice(1, 3)

console.log(myn1);  //  [ 3, 2 ]

console.log("B ", Arr); //   B  [ 0, 3, 2, 4, 1, true, 'shivam' ]


const myn2 = Arr.splice(1, 3)   

console.log("C ", Arr); //  C  [ 0, 1, true, 'shivam' ]

console.log(myn2);  // [ 3, 2, 4 ]

// in slice there was no effect on the original array and the last param is ignored that is 4

// In splice it directly affected the orginal array and also accespt the last param that is 4


