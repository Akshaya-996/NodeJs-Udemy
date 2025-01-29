// console.log('Exiting...')
// process.exit(0); // 0 indicates a successful exit

// process.on('uncaughtException', (err) => {
//     console.log('Unhandled Exception:',err);
//     process.exit(1) // Non-zero exit code indicates failure
// })

// process.on('SIGINT', () => {
//     console.log('Received SIGINT, Exiting');
//     process.exit(0);
// })

// process.on('SIGTERM', () => {
//     console.log('Received SIGTERM. Cleaning up...');
//     process.exit(0);
// }) 

// process.stdin.on('data', (data) => {
// console.log(`You entered:${data.toString()}`);
// });

// process.stdout.write('Hello World!\n');
// process.on('exit', (code) => {
//     console.log(`Process exiting with code: ${code}`);
//   });

const {exec} = require('child_process');
exec('ls', (error, stdout, stderr) => {
    if(error){
        console.error(`Error:${error.message}`);
        return;
    }
    console.log(`Output:${stdout}`)
})
