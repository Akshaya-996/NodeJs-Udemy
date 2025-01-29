// Import the Node.js File System module to enable file operations. 
// In this case, it's used to read the file content asynchronously.
const fs = require('fs');

// Schedule a callback to run after a 0ms delay. 
// This goes into the **Timers phase** of the event loop.
setTimeout(() => console.log('Timer 1'), 0);

// Schedule a callback to run in the **Check phase** of the event loop.
setImmediate(() => console.log('immediate 1'));

 // Asynchronously read the file (__filename refers to the current file). 
  // Once the file is read, the callback is pushed to the event loop's **Poll phase**.
fs.readFile(__filename, () => {
      // Logs "File Read" when the read operation completes and the callback executes.
    console.log('File Read');

    //Within the file read callback, schedules another timer for the **Timers phase**.
    setTimeout(() => console.log('Timer 2'), 0)

     // Schedules another callback for the **Check phase**.
    setImmediate(() => console.log('Immediate 2'))
})

// Logs "Start" immediately as it's synchronous and part of the main thread.
console.log('start')
