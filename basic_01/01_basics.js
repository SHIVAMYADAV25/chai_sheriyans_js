const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;


/*
    const se jo bhi value diya hai vo vahi raha ga no change's canbe done in it
    let scope se related hota hai
    var globle scope pai access able hai to usa use karna is risky so don't use that
    hum variable without const/let aur var ke bhi baana sakte hai
    console.table => mai hum multiple value print karte hai using [inside this the variable name comes]
    const accountstate without valaue bhi bhi declare kar sakte hai uski printed value undefined raha ga
*/

console.table([accountId,accountPassword,accountEmail,accountState,accountCity])


// asia o/p ayaega

/*
┌─────────┬─────────────────────┐
│ (index) │ Values              │
├─────────┼─────────────────────┤
│ 0       │ 144553              │
│ 1       │ '12345'             │
│ 2       │ 'hitesh@google.com' │
│ 3       │ undefined           │
│ 4       │ 'Jaipur'            │
└─────────┴─────────────────────┘
*/