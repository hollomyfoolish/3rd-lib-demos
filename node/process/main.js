const cp = require('child_process');
const path = require('path');

let worker = cp.fork(path.resolve(__dirname, './worker'))
worker.on('message', msg => {
    console.log(`${process.pid}: message received: ${JSON.stringify(msg)}`)
})

worker.on('close', (code, signal) => {
    console.log(`${process.pid}: worker closed: ${code}, ${signal}`)
})

worker.on('disconnect', () => {
    console.log(`${process.pid}: worker disconnect`)
})

worker.on('error', err => {
    console.log(`${process.pid}: worker error: ${JSON.stringify(err)}`)
})

worker.on('exit', (code, signal) => {
    console.log(`${process.pid}: worker exit: ${code}, ${signal}`)
})


new Promise((resolve, reject) => {
    console.log('init promise')
})

let count = 5;
console.log(`${process.pid}: start`)
for(let i = 0; i < count; i++){
    setTimeout(() => worker.send({
        idx: i,
        msg: 'hello' + i
    }), i * 2000);
}