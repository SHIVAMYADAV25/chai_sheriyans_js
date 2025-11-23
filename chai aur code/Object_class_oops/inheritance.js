class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// inheritnace using (extends) keyword

class Teacher extends User{
    constructor(username, email, password){
        super(username) 
        // this is same what we were doing in call.js the line 
        // username.call(this,username)  === super(username)
        // super giving the teacher this context to the User so the user can access it 
        // so after the super(username) the this context of User id of Teacher
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
// use new keyword
// 1) object gets create
// 2) constructor function get's called bc of new keyowrd
// 3) all the argument is inserted in this keyword
// 4) all the thing can be accessable to user

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User); // true