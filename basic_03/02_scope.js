// var c = 300
// let a = 300
if (true) {
    let c = 10
    const b = 20
    // console.log("INNER: ", c); 
}

// console.log(a);
// console.log(b);
// console.log(c);

// let is block scope mean it is only accesable to the related to the {} => paranthesis 
// so in inner print of let the value is 10 
// but when print in 9th line the value is 300 
// the change is only seen in the scope not globally
// so the change happen because the a is again define in that scope so the code it getting acces of that no the 300 wala

var c = 400;

if(true){
    let a = 100;
    const b = 200;
    var c = 300
}

// console.log(a);  not accesable
// console.log(b);  same 
console.log(c); // accesable  and changeable not recommended

// clouser in js

// thing like the child can get the ice-scream of your but u cannot get the ice-screa of child
// there the child are the outer function (one) and inner function (two) and the ice-scream is username and website

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// the two() can access the value of one that is username
// but the outer function cannot access the value of two that is website


// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// same here in if  same logic is aplied

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

// diff
// can call function before creating it



addTwo(5)
const addTwo = function(num){
    return num + 2
}

// cannot call function before creating it will give u an error