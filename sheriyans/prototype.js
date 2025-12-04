class Sketch{
    constructor(){
        this.charachter = "doremon";
        this.color = "pink";
        this.somfunc = function () {}
    }
}

// there will be only one speak and walk function
// each object created with Sketch will point to the created speak and walk
// will not create there own speak and walk function
// any thing side the construtor will automatically gets add in prototype
// so need to use this syntax (its is just for understanding)
Sketch.prototype.speak = function(){}
Sketch.prototype.walk = function(){}

// so when ever the object will be created it will be having its own characther , color , and somefunc but 
// it will be having only one speak and walk for all the object created by Sketch