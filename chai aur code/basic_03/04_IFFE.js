// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


// iife is used for avoiding the pollution of variable declared globally in js
// iife is run immediatly when the page load 
// there are two iife one is named that is first one another is normal/unamed

// to run two or more iife we need to put semi-colon to the last declared ();
// because the scope of the iife should end there 
// and another scope of the iife is bigen

// iife create it's own gobal scope in which the outer scope cannot access

// eg:
(function() {
  var count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  increment(); // works fine
})();

// console.log(count); // ReferenceError – count is not defined