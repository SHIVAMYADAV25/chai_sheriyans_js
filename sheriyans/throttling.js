function thro(fn,delay){
    let last = 0;
    return function (){
        const date = Date.now();
        if(date - last <= delay){
            last = date;
            fn();
        }
    }
}

window.addEventListener("mousemove",debounce(function(){
    console.log("hello")
},3000));