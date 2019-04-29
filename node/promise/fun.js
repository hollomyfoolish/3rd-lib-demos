console.log(arguments);
console.log(arguments.callee.toString());

console.log(this === global)
console.log(this.require)

let sFun = `
    (function foo(arg1, arg2) {
        console.log(arg1);
        console.log(arg2);
        console.log(arg1 + arg2);
    })
`
let f = eval(sFun);

f(1, 2)
