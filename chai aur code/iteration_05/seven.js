const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]

// chaining (do thin method ak sath use kar sakte hai)
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1) // value comes from the o/p given by the above map function 
                .filter( (num) => num >= 40)    // same with this

console.log(newNums);

// o/p:
// [
//   41, 51,  61, 71,
//   81, 91, 101
// ]