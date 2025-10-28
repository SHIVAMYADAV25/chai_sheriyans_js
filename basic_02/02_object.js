
// singleton way of creating object

// const tinderUser = new Object()
const tinderUser = {}

//inserting value
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
//{ id: '123abc', name: 'Sammy', isLoggedIn: false }


//nested object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // if print this { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2, obj4) if print this { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const obj3 = {...obj1, ...obj2} // if print this { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);


// can store object inside array
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// accessing it 
users[1].email
// console.log(tinderUser);    //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser));    // access only key 
//[ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser));  // access only value
//  [ '123abc', 'Sammy', false ]

// console.log(Object.entries(tinderUser));    // kinda covert all the key:value each inside there array
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // check if the value is present or not
// True


// react overview and helping 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// its like assiging variable so know the instructor hold's the value of coursename
// it is a kind of syntax

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//API syntax
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
