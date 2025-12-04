// call apply bind

// ek function mein this ki value window hoti hai , agar app chaate ho ki wo value window naa ho par koi aur value ho tab app use kar sakte ho call apply bind


function abc(a,b,c){
    console.log(this) // default window
}

let obj = {
    name : "shivam"
}

abc.call(obj,1,2,3);
// after using call the this value will be object (can also pass paramter)

// same thing in apply only change is that the arguement will be passed inside Array
abc.apply(obj,[1,2,3]);

// same like call only diff is it return function which will get inventually call 
const bind_fnc = abc.bind(obj,1,2,3);

// call be having the this value as obj and can be called
bind_fnc();

// call -> func chalata hai aur this ki value set karta hai
// apply -> wahi karta hai jo call karta hai and argument mein pahlu value this ki and doosri value array of paramter hota hai
// bind -> wahi karta hai jo call jarta hai aur aapko naya func deta hai kise call kar sakte hai