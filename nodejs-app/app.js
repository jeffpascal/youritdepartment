
const logger = require('./logger')
const path = require('path');

let varObj = path.parse(__filename);
console.log(varObj)

const sayHello = (name) => {
    console.log('Hello, ' + name);
}

console.log(module.parent)