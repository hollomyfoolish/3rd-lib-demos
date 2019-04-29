process.on('message', msg => {
    console.log(`${process.pid}: message received from main process: ${JSON.stringify(msg)}`)
    if(msg.idx === 4){
        process.disconnect();
    }else{
        process.send({
            idx: msg.idx,
            msg: 'result from worker'
        });
    }
})

process.on('close', (code, signal) => {
    console.log(`${process.pid}: process closed: ${code}, ${signal}`)
})

process.on('disconnect', () => {
    console.log(`${process.pid}: process disconnect`)
})

process.on('error', err => {
    console.log(`${process.pid}: process error: ${JSON.stringify(err)}`)
})

process.on('exit', (code, signal) => {
    console.log(`${process.pid}: process exit: ${code}, ${signal}`)
})