function fetching(mess,func){
    console.log(mess);
    setTimeout(()=>{
        func({"id" : 0 , "name": "nun" , "prof" : "teach"})
    },5000)
}

fetching("fetching data",(details)=>{
    console.log(details)
})

// A callback function is a function that is passed as an argument to another function,
//  to be called (executed) later by that function.

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData(function(result) {
  console.log(result);
});


// Why JavaScript Uses Callbacks (one-line answer)

// JavaScript uses callbacks to handle asynchronous operations like API calls, timers, and event handling without blocking the main thread.

// One-Line Strong Definition (for quick interviews)

// A callback is a function passed into another function to be executed later, usually after a task is completed.