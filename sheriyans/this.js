// global -> window
console.log(this)
// function -> window
function THIS()
{
    console.log(this)
}
// es5 function inside object -> object
let object = {
    es5 :function(){
        console.log(this)
    }
}
// es6 function inside object -> window

let obj1 = {
    es6: () => {
        console.log(this)
    }
}

// es5 function inside es5 function inside object -> window

let obj2 = {
    es5: function(){
        function es5_1(){
            console.log(this)
        }
        es5_1();
    }
}

// es6 function inside es5 function inside onject -> object

let obj3 = {
    es5: function(){
        es5_1 : () => {
            console.log(this)
        }
        es5_1();
    }
}

// this with addEventLister return the selected element like there it will be div
let div = document.getElementById("div");

div.addEventListener("click",()=>{
    console.log(this)
})

// settimeout mai this ki value will be window(because it is glabal function)