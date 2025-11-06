// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}

// o/p:
// 0
// 1
// 2
// 3
// 4
// 5 is best number
// 5
// 6
// 7
// 8
// 9
// 10

// console.log(element); // cannot access it

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     console.log(`Inner loop value ${j} and inner loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j );
//    }
    
// }

// o/p:
// Outer loop value: 1
// Inner loop value 1 and inner loop 1
// 1*1 = 1
// Inner loop value 2 and inner loop 1
// 1*2 = 2
// Inner loop value 3 and inner loop 1
// 1*3 = 3
// Inner loop value 4 and inner loop 1
// 1*4 = 4
// Inner loop value 5 and inner loop 1
// 1*5 = 5
// Inner loop value 6 and inner loop 1
// 1*6 = 6
// Inner loop value 7 and inner loop 1
// 1*7 = 7
// Inner loop value 8 and inner loop 1
// 1*8 = 8
// Inner loop value 9 and inner loop 1
// 1*9 = 9
// Inner loop value 10 and inner loop 1
// 1*10 = 10
// Outer loop value: 2
// Inner loop value 1 and inner loop 2
// 2*1 = 2
// Inner loop value 2 and inner loop 2
// 2*2 = 4
// Inner loop value 3 and inner loop 2
// 2*3 = 6
// Inner loop value 4 and inner loop 2
// 2*4 = 8
// Inner loop value 5 and inner loop 2
// 2*5 = 10
// Inner loop value 6 and inner loop 2
// 2*6 = 12
// Inner loop value 7 and inner loop 2
// 2*7 = 14
// Inner loop value 8 and inner loop 2
// 2*8 = 16
// Inner loop value 9 and inner loop 2
// 2*9 = 18
// Inner loop value 10 and inner loop 2
// 2*10 = 20
// Outer loop value: 3
// Inner loop value 1 and inner loop 3
// 3*1 = 3
// Inner loop value 2 and inner loop 3
// 3*2 = 6
// Inner loop value 3 and inner loop 3
// 3*3 = 9
// Inner loop value 4 and inner loop 3
// 3*4 = 12
// Inner loop value 5 and inner loop 3
// 3*5 = 15
// Inner loop value 6 and inner loop 3
// 3*6 = 18
// Inner loop value 7 and inner loop 3
// 3*7 = 21
// Inner loop value 8 and inner loop 3
// 3*8 = 24
// Inner loop value 9 and inner loop 3
// 3*9 = 27
// Inner loop value 10 and inner loop 3
// 3*10 = 30
// Outer loop value: 4
// Inner loop value 1 and inner loop 4
// 4*1 = 4
// Inner loop value 2 and inner loop 4
// 4*2 = 8
// Inner loop value 3 and inner loop 4
// 4*3 = 12
// Inner loop value 4 and inner loop 4
// 4*4 = 16
// Inner loop value 5 and inner loop 4
// 4*5 = 20
// Inner loop value 6 and inner loop 4
// 4*6 = 24
// Inner loop value 7 and inner loop 4
// 4*7 = 28
// Inner loop value 8 and inner loop 4
// 4*8 = 32
// Inner loop value 9 and inner loop 4
// 4*9 = 36
// Inner loop value 10 and inner loop 4
// 4*10 = 40
// Outer loop value: 5
// Inner loop value 1 and inner loop 5
// 5*1 = 5
// Inner loop value 2 and inner loop 5
// 5*2 = 10
// Inner loop value 3 and inner loop 5
// 5*3 = 15
// Inner loop value 4 and inner loop 5
// 5*4 = 20
// Inner loop value 5 and inner loop 5
// 5*5 = 25
// Inner loop value 6 and inner loop 5
// 5*6 = 30
// Inner loop value 7 and inner loop 5
// 5*7 = 35
// Inner loop value 8 and inner loop 5
// 5*8 = 40
// Inner loop value 9 and inner loop 5
// 5*9 = 45
// Inner loop value 10 and inner loop 5
// 5*10 = 50
// Outer loop value: 6
// Inner loop value 1 and inner loop 6
// 6*1 = 6
// Inner loop value 2 and inner loop 6
// 6*2 = 12
// Inner loop value 3 and inner loop 6
// 6*3 = 18
// Inner loop value 4 and inner loop 6
// 6*4 = 24
// Inner loop value 5 and inner loop 6
// 6*5 = 30
// Inner loop value 6 and inner loop 6
// 6*6 = 36
// Inner loop value 7 and inner loop 6
// 6*7 = 42
// Inner loop value 8 and inner loop 6
// 6*8 = 48
// Inner loop value 9 and inner loop 6
// 6*9 = 54
// Inner loop value 10 and inner loop 6
// 6*10 = 60
// Outer loop value: 7
// Inner loop value 1 and inner loop 7
// 7*1 = 7
// Inner loop value 2 and inner loop 7
// 7*2 = 14
// Inner loop value 3 and inner loop 7
// 7*3 = 21
// Inner loop value 4 and inner loop 7
// 7*4 = 28
// Inner loop value 5 and inner loop 7
// 7*5 = 35
// Inner loop value 6 and inner loop 7
// 7*6 = 42
// Inner loop value 7 and inner loop 7
// 7*7 = 49
// Inner loop value 8 and inner loop 7
// 7*8 = 56
// Inner loop value 9 and inner loop 7
// 7*9 = 63
// Inner loop value 10 and inner loop 7
// 7*10 = 70
// Outer loop value: 8
// Inner loop value 1 and inner loop 8
// 8*1 = 8
// Inner loop value 2 and inner loop 8
// 8*2 = 16
// Inner loop value 3 and inner loop 8
// 8*3 = 24
// Inner loop value 4 and inner loop 8
// 8*4 = 32
// Inner loop value 5 and inner loop 8
// 8*5 = 40
// Inner loop value 6 and inner loop 8
// 8*6 = 48
// Inner loop value 7 and inner loop 8
// 8*7 = 56
// Inner loop value 8 and inner loop 8
// 8*8 = 64
// Inner loop value 9 and inner loop 8
// 8*9 = 72
// Inner loop value 10 and inner loop 8
// 8*10 = 80
// Outer loop value: 9
// Inner loop value 1 and inner loop 9
// 9*1 = 9
// Inner loop value 2 and inner loop 9
// 9*2 = 18
// Inner loop value 3 and inner loop 9
// 9*3 = 27
// Inner loop value 4 and inner loop 9
// 9*4 = 36
// Inner loop value 5 and inner loop 9
// 9*5 = 45
// Inner loop value 6 and inner loop 9
// 9*6 = 54
// Inner loop value 7 and inner loop 9
// 9*7 = 63
// Inner loop value 8 and inner loop 9
// 9*8 = 72
// Inner loop value 9 and inner loop 9
// 9*9 = 81
// Inner loop value 10 and inner loop 9
// 9*10 = 90
// Outer loop value: 10
// Inner loop value 1 and inner loop 10
// 10*1 = 10
// Inner loop value 2 and inner loop 10
// 10*2 = 20
// Inner loop value 3 and inner loop 10
// 10*3 = 30
// Inner loop value 4 and inner loop 10
// 10*4 = 40
// Inner loop value 5 and inner loop 10
// 10*5 = 50
// Inner loop value 6 and inner loop 10
// 10*6 = 60
// Inner loop value 7 and inner loop 10
// 10*7 = 70
// Inner loop value 8 and inner loop 10
// 10*8 = 80
// Inner loop value 9 and inner loop 10
// 10*9 = 90
// Inner loop value 10 and inner loop 10
// 10*10 = 100

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}

// o/p:
// flash
// batman
// superman


// break and continue
// break => pura breaj he dar deta hai 
// continue => skip kar deta hai

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

// o/p:
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}

// o/p:
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5
// Value of i is 6
// Value of i is 7
// Value of i is 8
// Value of i is 9
// Value of i is 10
// Value of i is 11
// Value of i is 12
// Value of i is 13
// Value of i is 14
// Value of i is 15
// Value of i is 16
// Value of i is 17
// Value of i is 18
// Value of i is 19
// Value of i is 20