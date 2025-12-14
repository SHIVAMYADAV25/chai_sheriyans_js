function debounce(fn,delay){
    let time;
    return function () {
    clearTimeout(time);
    time = setTimeout(fn,delay);
    }
}

let InputOne = document.getElementById("InputTest");
InputOne.addEventListener("input",debounce(function(){
    console.log("hello")
},3000));