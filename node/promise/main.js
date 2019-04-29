let taskCreator = (name) => function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${name}: done`);
            resolve();
        }, 1000);
    });
};

let size = 10;
let tasks = [];
for(let i = 1; i <= size; i++){
    tasks.push(taskCreator(`Task ${i}`));
}

tasks.reduce((pre, curr) => {
    return pre.then(() => {
        return curr();
    })
}, Promise.resolve());
