function SetUsername(username){
    //complex DB calls
    // this will we having the context of createUser
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // explicitly calling
// to jab ya pai call lekha hai vo jab vo SetUsername mai jayaga to vo uska this nhi use kare ga vo createUser ka this context use 
// karega

// so like we are passing the context of createUser this context so that Setusername will access the createuser this context
// not his own
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);