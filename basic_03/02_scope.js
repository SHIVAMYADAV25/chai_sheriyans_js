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

