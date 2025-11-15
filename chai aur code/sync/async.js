// javascript:
//     |
//     | - synchronous (one by one)
//     |
//     | - single thread (no multiple threathing)




// Execution:
//     |
//     | - Execution line by line code at a time
//     | - console.log()
//     | - console.log()
//     |
//     | - call stack and memory heap


// blocking code (sync) and nonblocking code (async):
//     |                       |
// block the flow      does not block code
// of program                  |
//     |               read file async
// read file sync

// read file is heavy task this is done by kernel so it is done step by step 
// the task is given to kernel then it task time so the all other task are kept undone till kernel complete the actual file reading task

// in sync the file read is done and all other task are waiting to complete it
// in async the file read is done side by side all the other task is done

// **************************************************************EXECUTION****************************************************************************

// line of code is written in file and it execute like :
// first : goes in callstack it execute checks that there is and
//  async function then it give that thing to web API (there all the async code run like settimeout interval ,DOM API , fetch )
// if then there is an register call back operation which the event handing this thing (like settimeout , DOM API event(click at the end dom is also and async code run after an operation happen))
// then this register call back give the code to the task queue is follows the lifo method and give the execution of code to 
// call stack at the top and then it execute immediately (bc it follow FIFO method)

// eg: 1 , (run 2 after 0 second) , 3
// then the o/p will be 1 , 3 and 2 because 2 goes from all the process above given 
// call stack -> WEB API -> register call back > task queue -> then call stack

// there only diff with fetch is that it uses the priority queue rather than task queue
// priority queue is use promise resolve or fail kinda thing 
// rest is same no change