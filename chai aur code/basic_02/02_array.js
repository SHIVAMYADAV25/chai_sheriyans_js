const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// access element like this marvel_heros[3][1]
// with this we can access the superman

// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
//  console.log(allHeros);
//  [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// concadition return an collection of array 
// push happen to work on the actual element (original array)


/* how ro do spreading */

// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,12,[1,2,3,12],[12,4,22,1,[212,23,244,11]]]
            // ^
            // |
//        this is also an array

/* how will i access it properly */

// const real_another_array = another_array.flat(Infinity)     // infinite is an parames that how many deep the function should go

// console.log(real_another_array);

// o/p
// [
//     1,  2,   3, 12,  1, 2,
//     3, 12,  12,  4, 22, 1,
//   212, 23, 244, 11
// ]


// console.log(Array.from("shivam"));
// spite the line in or word in each letter
// [ 's', 'h', 'i', 'v', 'a', 'm' ]


console.log(Array.isArray(["shivam"]));
// check if the paramtere passed is an array or not return as is in true or false

console.log(Array.from({"hi":"shivam"}));
// return an empty array so work different on an object


let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));
// [ 100, 200, 300 ]
//  OF is given an bunch of variable it will give the collection as array



